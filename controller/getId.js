var {getProduct} = require('../db.js');
module.exports = (req, res) => {
  var {id} = req.params;
  getProduct(id, (err, result) => {
    if(err) return res.send(err + '');
    res.send(result.rows[0]);
  });
};

function SanPham(id, tieuDe, hinh, moTa, gia, nguoiDang, sdt){
  this.id = id;
  this.tieuDe = tieuDe;
  this.hinh = hinh;
  this.moTa = moTa;
  this.gia = gia;
  this.nguoiDang = nguoiDang;
  this.sdt = sdt;
}
