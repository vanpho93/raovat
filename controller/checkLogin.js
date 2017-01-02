module.exports = (req, res) => {
  res.send({
    isLogin: req.session.isLogin,
    username: req.session.username
  });
}
