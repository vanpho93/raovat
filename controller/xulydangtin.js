var upload = require('../upload.js').getUpload('avatar');
var {insertDB} = require('../db.js');
module.exports = (req, res) => {
  upload(req, res, err => {
    if(err) return res.send(err + '');
    var {title, description, address, price, district, tieuMuc, name, phone} = req.body;
    if(req.file){
      var {filename} = req.file;
    }else{
      var filename = ''
    }
    insertDB(title, description, name, phone, filename, price, address,
      district, tieuMuc, (err, result) => {
      if(err) return res.send(err);
    })
    res.redirect('/');
  });
};
