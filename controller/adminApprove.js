var {approve} = require('../db.js');
module.exports = (req, res) => {
  var {id} = req.body;
  approve(id)
  .then(() => {res.send('approve_thanh_cong')})
  .catch(err => {res.send('approve_that_bai ' + err)})
}
