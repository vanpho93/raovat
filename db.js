var pg = require('pg');

// For Heroku
// var URI = 'postgres://kyreohmtxstplx:e4ccbccdabbefcecc52c1f1fa263a4333a6b265fb1d970750151060538b279b7@ec2-54-221-210-126.compute-1.amazonaws.com:5432/d3sdrm0knuaur9';
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

// For localhost
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
  pool.connect((err, client, done) => {
    if(err) return cb(err);
    done();
    client.query(sql, (err, result) => {
      if(err) return cb(err);
      return cb(err, result);
    });
  });
}

function insertDB(title, desc, image, price, address, idDistrict, idDanhMuc, idUser, cb){
  var sql = `INSERT INTO public."RaoVat"(
	title, description, image, address, "idQuan", price, "idDanhMuc", "idUser")
	VALUES ('${title}', '${desc}', '${image}', '${address}', ${idDistrict}, ${price}, ${idDanhMuc}, ${idUser});`
  //console.log(sql);
  query(sql, cb)
}

//================================================
//Search function
function getListProduct(cb){
  query(`SELECT "RaoVat"."id", "postTime", "title", "description", "RaoVat"."image" as "image", "price", "fullname", "phone", "isChecked" FROM
  ("RaoVat" JOIN "User" ON "RaoVat"."idUser" = "User"."id") WHERE "isChecked" = true ORDER BY "postTime" DESC`, cb);
}

function getCategory(cb){
  return new Promise(function(resolve, reject) {
    query(`SELECT * FROM "DanhMuc"`, (err, result) => {
      if(err) return reject(err);
      return resolve(result.rows);
    });
  });
}

function getProduct(id , cb){
  query(`SELECT "a"."id", "postTime", "title", "address", "description", "a"."image", "fullname", "phone" FROM (
  (SELECT "RaoVat"."id", "postTime", "title", "address", "description", "RaoVat"."image", "idUser" FROM "RaoVat" WHERE id = ${id}) AS "a"
  JOIN "User" ON "a"."idUser" = "User".id)`, cb)}

function getProductSearch(text, cb){
  query(`SELECT * FROM "RaoVat" WHERE lower("title") LIKE '%${text}%' AND "isChecked" = true ORDER BY "postTime" DESC`, cb)
}

function getProductByCategory(id){
  return new Promise(function(resolve, reject) {
    query(`SELECT * FROM "RaoVat" WHERE "idDanhMuc" = ${id} AND "isChecked" = true ORDER BY "postTime" DESC`,
      (err, result) => {
        if(err) return reject(err);
        resolve(result.rows);
      })
  });
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
        return cb(undefined, result.rows[0].id, result.rows[0].fullname);
      }
      return cb('Sai password');
    };
    cb('Username khong ton tai');
  });
}

function approve(id){
  return new Promise((resolve, reject) => {
    var sql = `UPDATE "RaoVat" SET "isChecked" = true WHERE id = ${id}`
    query(sql, (err, result) => {
      if(err) return reject(err);
      resolve();
    });
  });
}

//================================================
//Server prepare
function getDistricts() {
  return new Promise(function(resolve, reject) {
    query('SELECT * FROM "District"', (err, result) => {
      if(err) return reject(err);
      resolve(result.rows);
    });
  });
}

module.exports = {query, getListProduct, getProduct, insertDB, getCategory, getProductSearch, insertUser, checkLogin, getUncheck, approve,
getDistricts, getProductByCategory};
