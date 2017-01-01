var {query, getListProduct, getProduct, insertDB, getCategory,
  getProductByTieuMuc, getProductSearch, insertUser, checkLogin, getUncheck} = require('./db.js');

getUncheck()
.then(rows => console.log(rows.length))
.catch(err => console.log(err + ''))
