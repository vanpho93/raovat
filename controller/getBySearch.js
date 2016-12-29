var {getProductSearch} = require('../db.js');
module.exports = (req, res) => {
  var {text} = req.body;
  getProductSearch(text.toLowerCase(), (err, result) => {
    if(err) return res.send(err + '');
    res.send(result.rows);
  });
};
