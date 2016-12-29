var upload = require('../upload.js').getUpload('avatar');
module.exports = (req, res) => {
  upload(req, res, err => {
    if(err) return res.send(err + '');
    res.send(req.file.filename);
  });
};
