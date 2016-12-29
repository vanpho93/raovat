var {getCategory} = require('../db.js');
module.exports = (req, res) => {
  getCategory((err, result) => {
    var arrGroup = xylu(result.rows);
    res.send(arrGroup);
  });
}

//Get all separater
function getAllSep(arrayObject, sepProps){
  var mang = [];
  arrayObject.forEach(e => {
    if(mang.indexOf(e[sep]) == -1){
      mang.push(e[sep]);
    }
  });
  return mang;
}

function Group(groupName, listItem){
  this.groupName = groupName;
  this.listItem = listItem;
}

var mangGroup = [];
var mangIdDanhMuc = [1, 2, 3, 4, 5];

function addToGroup(arrRaw){
  arrRaw.forEach(e => {

  })
}
