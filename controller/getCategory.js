var {getCategory} = require('../db.js');
module.exports = loadCategory;

var mangGroup = [];

function loadCategory(){
  return new Promise(function(resolve, reject) {
    getCategory((err, result) => {
      if(err) return reject(err);
      initGroup(result.rows);
      addData(result.rows);
      return resolve(mangGroup);
    });
  });
}

function Group(title){
  this.title = title;
  this.listItem = [];
}

function Item(id, tieuMuc){
  this.id = id;
  this.tieuMuc = tieuMuc;
}


function initGroup(arrRaw){
  arrRaw.forEach(raw => {
    if(mangGroup.findIndex(e => e.title == raw.tenDanhMuc) == -1){
      mangGroup.push(new Group(raw.tenDanhMuc));
    }
  });
}

function addData(arrRaw){
  arrRaw.forEach(raw => {
    var index = mangGroup.findIndex(e => e.title == raw.tenDanhMuc);
    var {id, tenTieuMuc} = raw;
    mangGroup[index].listItem.push(new Item(id, tenTieuMuc));
  });
}
