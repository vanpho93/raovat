module.exports = (req, res) => {
  res.send(req.session.isLogin);
}
