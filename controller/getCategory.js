var {getCategory} = require('../db.js');
module.exports = (req, res) => {
  if(mangGroup.length == 0){
    getCategory((err, result) => {
        initGroup(result.rows);
        addData(result.rows);
      res.send(mangGroup);
    });
  }else{
    res.send(mangGroup);
  }
}

function Group(title){
  this.title = title;
  this.listItem = [];
}

function Item(id, tieuMuc){
  this.id = id;
  this.tieuMuc = tieuMuc;
}

var mangGroup = [];

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
