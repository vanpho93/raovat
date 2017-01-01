var upload = require('../upload.js').getUpload('avatar');
var {insertUser} = require('../db.js');
module.exports = (req, res) => {
  upload(req, res, err => {
    if(err) return res.send('Loi ' + err);
    var image = '';
    if(req.file) image = req.file.filename;
    var {username, password, phone, fullname, email} = req.body;
    console.log(req.body);
    insertUser(username, password, phone, image, fullname, phone)
    .then(() => res.send('DANG_KY_THANH_CONG'))
    .catch((e) => res.send('DANG_KY_THAT_BAI ' + e));
  });
};
