var {getListProduct} = require('../db.js');
module.exports = (req, res) => {
  getListProduct((err, result) => {
    res.send(result.rows);
  });
}
