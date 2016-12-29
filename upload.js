var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "./public/");
  },
  filename: function(req, file, cb){
    cb(null, Date.now() + file.originalname);
  }
});

// var upload = multer({storage, fileFilter, limits}).single('avatar');

function getUpload(fieldname){
  return multer({storage}).single(fieldname);
}

function getArrayUpload(fieldname){
  return multer({storage}).array(fieldname);
}

module.exports = {getUpload, getArrayUpload};
