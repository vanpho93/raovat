var {getProductByCategory} = require('../db.js');
module.exports = (req, res) => {
  getProductByCategory(req.params.id)
  .then(rows => res.send(rows))
  .catch(err => res.send(err))
};
