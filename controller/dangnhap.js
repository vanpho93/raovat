var {checkLogin} = require('../db.js');
module.exports = (req, res) => {
  var {username, password} = req.body;
  checkLogin(username, password, (err, idUser) => {
    if(err){
      return res.send('DANG_KY_THAT_BAI');
    }
    req.session.isLogin = true;
    req.session.idUser = idUser;
    req.session.username = username;
    res.send(username);
  });
};
