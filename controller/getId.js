module.exports = (req, res) => {
  var {id} = req.params;
  res.send(new SanPham(1, 'Blackberry 9860', '1.jpg', `Cần bán lại 9860 , pin trâu , trc mình mua về chỉ để phát wifi thôi , ko lỗi lầm
Ra đi giá 650 máy pin , os 7.1
Bác nào trả giá quá tha em nhé
Địa chỉ : 753 tân sơn gò vấp`, 650000, 'Son', '01694472177'));
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
