var upload = require('../upload.js').getUpload('avatar');
module.exports = (req, res) => {
  upload(req, res, err => {
    console.log(req.body);
    console.log('ERR: ' + err);
    if(err) return res.send(err + '');
    res.send(req.body);
  });
};
