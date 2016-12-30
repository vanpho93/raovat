module.exports = (req, res) => {
  var {username, password} = req.body;
  if(username == 'pho', password == '123'){
    req.session.isLogin == true;
    return res.send('DANG_NHAP_THANH_CONG')
  }
  res.send('DANG_NHAP_THAt_BAI');
};
