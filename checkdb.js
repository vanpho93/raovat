var {query, getListProduct, getProduct, insertDB, getCategory,
  getProductByTieuMuc, getProductSearch, insertUser, checkLogin, getUncheck} = require('./db.js');

getProductSearch('hfa', (err, result) => {
  if(err) return console.log('That bai: ' + err);
  console.log(result.rows);
})
