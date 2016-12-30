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
  pool.connect((err, client, done) => {
    if(err) return cb(err);
    done();
    client.query(sql, (err, result) => {
      if(err) return cb(err);
      return cb(err, result);
    });
  });
}

function insertDB(title, desc, name, phone, image, price, address, idDistrict, idTieuMuc, cb){
  var sql = `INSERT INTO public."RaoVat"(
	title, description, name, phone, image, address, "idQuan", price, "idTieuMuc")
	VALUES ('${title}', '${desc}', '${name}', '${phone}', '${image}', '${address}', ${idTieuMuc}, ${price}, ${idTieuMuc});`
  //console.log(sql);
  query(sql, cb)
}

function getListProduct(cb){
  query('SELECT * FROM "RaoVat"', cb);
}

function getCategory(cb){
  query(`SELECT "TieuMuc"."id", "TieuMuc"."tenTieuMuc", "DanhMuc"."id" AS "idDanhMuc", "DanhMuc"."tenDanhMuc" FROM
"TieuMuc" JOIN "DanhMuc"
ON "TieuMuc"."idDanhMuc" = "DanhMuc"."id"`,cb);
}

function getProduct(id, cb){
  query('SELECT * FROM "RaoVat" WHERE id = ' + id, cb);
}

function getProductByTieuMuc(id, cb){
  query('SELECT * FROM "RaoVat" WHERE "idTieuMuc" = ' + id, cb);
}

function getProductSearch(text, cb){
  query(`SELECT * FROM "RaoVat" WHERE lower("title") LIKE '%${text}%'`, cb)
}
module.exports = {query, getListProduct, getProduct, insertDB, getCategory, getProductByTieuMuc, getProductSearch};
