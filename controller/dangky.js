var {getUpload} = require('../upload.js');
var {inserUser} = require('../db.js');
module.exports = (req, res) => {
  getUpload('avatar')(req, res, err => {
    if(err) return res.send('Loi ' + err);
    var image = '';
    if(req.file) image = req.file.filename;
    var {username, password, email, phone, fullname} = req.body;
    inserUser(username, password, phone, image, fullname, phone)
    .then(() => res.send('DANG_KY_THANH_CONG'))
    .catch(() => res.send('DANG_KY_THAT_BAI'));
  });
};
