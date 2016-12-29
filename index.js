var express = require('express');
var app = express();
var parser = require('body-parser').urlencoded({extended: false});


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(process.env.PORT || 3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));
app.get('/api/getById/:id', require('./controller/getId.js'));
app.get('/api/all', require('./controller/getAll.js'));
app.get('/api/category', require('./controller/getCategory.js'));
app.get('/api/getByTieuMuc/:id', require('./controller/getByTieuMuc.js'));
app.post('/api/search/', parser, require('./controller/getBySearch.js'));
app.post('/xulydangtin', require('./controller/xulydangtin.js'));
