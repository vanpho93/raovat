var upload = require('../upload.js').getUpload('avatar');
var {insertDB} = require('../db.js');
module.exports = (req, res) => {
  upload(req, res, err => {
    if(err) return res.send(err + '');
    var {title, description, address, price, district, tieuMuc} = req.body;
    var {idUser} = req.session;
    var filename = '';
    if(req.file){
      filename = req.file.filename;
    }
    insertDB(title, description, filename, price, address,
      district, tieuMuc, idUser, (err, result) => {
      if(err) return res.send('Vui long kiem tra lai thong tin');
      res.redirect('/');
    })
  });
};
