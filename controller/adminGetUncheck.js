var {getUncheck} = require('../db.js')
module.exports = (req, res) => {
  getUncheck()
  .then(rows => res.send(rows))
  .catch(err => res.send(err))
};
