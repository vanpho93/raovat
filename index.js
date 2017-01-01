var express = require('express');
var app = express();
app.use(require('./controller/middleware'));
var parser = require('body-parser').urlencoded({extended: true});
var {query} = require('./db.js');
app.use(express.static('public'));
var favicon = require('serve-favicon');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(favicon(__dirname + '/public/favicon.ico'))
app.listen(process.env.PORT || 3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));

//Test features
app.get('/query', (req, res) => res.render('query'));
app.post('/xulysql', parser, (req, res) => {
  query(req.body.sql, (err, result) => {
    if(err) return res.send(err + '');
    res.json(result.rows);
  });
});
app.post('/testUpload', require('./controller/testUpload.js'));

//Search features
app.get('/api/getById/:id', require('./controller/getId.js'));
app.get('/api/all', require('./controller/getAll.js'));
app.get('/api/category', require('./controller/getCategory.js'));
app.get('/api/getByTieuMuc/:id', require('./controller/getByTieuMuc.js'));
app.post('/api/search/', parser, require('./controller/getBySearch.js'));

//User features
app.post('/xulydangtin', require('./controller/xulydangtin.js'));
app.post('/dangnhap', parser, require('./controller/dangnhap.js'));
app.post('/dangky', parser, require('./controller/dangky.js'));
app.get('/check', require('./controller/checkLogin.js'));

//Check insert product
app.get('/admin/unchecklist', require('./controller/adminGetUncheck.js'));
