var {getProductByTieuMuc} = require('../db.js');
module.exports = (req, res) => {
  var {id} = req.params;
  console.log(id);
  getProductByTieuMuc(id, (err, result) => {
    if(err) return res.send(err + '');
    res.send(result.rows);
  });
};
