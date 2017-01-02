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

//Prepare for server
var mangDistricts;
var {getDistricts} = require('./db.js');

getDistricts()
.then(rows => {
  mangDistricts = rows;
  app.listen(process.env.PORT || 3000, () => console.log('Server started'))
})
.catch(err => console.log(err + ''));

//Main route
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
app.get('/api/getByTieuMuc/:id', require('./controller/getByTieuMuc.js'));
app.post('/api/search/', parser, require('./controller/getBySearch.js'));

app.get('/api/district', (req, res) => res.send(mangDistricts));
app.get('/api/category', require('./controller/getCategory.js'));

//User features
app.post('/xulydangtin', require('./controller/xulydangtin.js'));
app.post('/dangnhap', parser, require('./controller/dangnhap.js'));
app.post('/dangky', parser, require('./controller/dangky.js'));
app.get('/check', require('./controller/checkLogin.js'));

//Admin features
app.get('/admin/unchecklist', require('./controller/adminGetUncheck.js'));
app.post('/admin/approve', parser, require('./controller/adminApprove'));
