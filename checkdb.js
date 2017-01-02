var {getProductByCategory} = require('./db.js');

getProductByCategory(1)
.then(rows => console.log(rows))
.catch(err => console.log(err + ''))
