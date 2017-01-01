var pg = require('pg');

//For Heroku
// var URI = 'postgres://ysodwyxoimuuyu:cc607f76e72c0ef8e071b84977fb635c71a0646632c77c83634176ae2324bb60@ec2-54-225-127-147.compute-1.amazonaws.com:5432/d89pev1q0kgsra';
// function query(sql, cb){
//   pg.connect(URI, (err, client, done) => {
//     if(err) return cb(err);
//     done();
//     client.query(sql, (err, result) => {
//       if(err) return cb(err);
//       return cb(err, result);
//     });
//   });
// }

//For localhost
var config = {
  user: 'postgres',
  password: 'khoapham',
  host: 'localhost',
  port: 5432,
  database: 'RaoVatSaiGon',
  idleTimeoutMillis: 500,
  max: 100
}

var pool = new pg.Pool(config);

function query(sql, cb){
  console.log(sql);
  pool.connect((err, client, done) => {
    if(err) return cb(err);
    done();
    client.query(sql, (err, result) => {
      if(err) return cb(err);
      return cb(err, result);
    });
  });
}

function insertDB(title, desc, image, price, address, idDistrict, idTieuMuc, idUser, cb){
  var sql = `INSERT INTO public."RaoVat"(
	title, description, image, address, "idQuan", price, "idTieuMuc", "idUser")
	VALUES ('${title}', '${desc}', '${image}', '${address}', ${idTieuMuc}, ${price}, ${idTieuMuc}, ${idUser});`
  //console.log(sql);
  query(sql, cb)
}

//================================================
//Search function
function getListProduct(cb){
  query('SELECT * FROM "RaoVat" WHERE "isChecked" = true ORDER BY "postTime" DESC', cb);
}

function getCategory(cb){
  query(`SELECT "TieuMuc"."id", "TieuMuc"."tenTieuMuc", "DanhMuc"."id" AS "idDanhMuc", "DanhMuc"."tenDanhMuc" FROM
"TieuMuc" JOIN "DanhMuc"
ON "TieuMuc"."idDanhMuc" = "DanhMuc"."id"`,cb);
}

function getProduct(id , cb){
  query('SELECT * FROM "RaoVat" WHERE id = ' + id, cb);
}

function getProductByTieuMuc(id, cb){
  query('SELECT * FROM "RaoVat" WHERE "idTieuMuc" = ' + id + ' AND "isChecked" = true ORDER BY "postTime" DESC', cb);
}

function getProductSearch(text, cb){
  query(`SELECT * FROM "RaoVat" WHERE lower("title") LIKE '%${text}%' AND isChecked = true ORDER BY "postTime" DESC'`, cb)
}

//Admin feature

function getUncheck() {
  var sql = `SELECT * FROM "RaoVat" WHERE "isChecked" = false`;
  return new Promise((resolve, reject) => {
    query(sql, (err, result) => {
      if(err) return reject(err);
      resolve(result.rows);
    });
  });
}

//================================================
//Sign in and Sign up

var {encrypt, decrypt} = require('./crypto.js');

function queryDB(sql, cb){
  var loi, kq;
  pool.connect((err, client, done) => {
    if(err){
      loi = 'Loi ket noi :: ' + err;
      return cb(loi, kq);
    }
    client.query(sql, (err, result) => {
      if(err){
        loi = 'Loi truy van :: ' + err;
        return cb(loi, kq);
      }
      kq = result;
      cb(loi, kq);
    });
  });
}

function insertUser(username, password, phone, image, fullname, email){
  return new Promise(function(resolve, reject) {
    sql = `INSERT INTO "User"(username, password, phone, image, fullname, email)
          VALUES ('${username}', '${encrypt(password)}', '${phone}', '${image}', '${fullname}', '${email}')`;
    console.log(sql);
    queryDB(sql, (err, result) => {
      if(err) return reject(err)
      resolve()
    });
  });
}

function checkLogin(username, password, cb){
  var sql = `SELECT * FROM "User" WHERE username = '${username}'`;
  queryDB(sql, (err, result) => {
    if(err){
      return cb(err);
    }
    if(result.rows[0]){
      var dePass = decrypt(result.rows[0].password);
      if(password == dePass){
        return cb(undefined, result.rows[0].id);
      }
      return cb('Sai password');
    };
    cb('Username khong ton tai');
  });
}

module.exports = {query, getListProduct, getProduct, insertDB, getCategory,
  getProductByTieuMuc, getProductSearch, insertUser, checkLogin, getUncheck};
