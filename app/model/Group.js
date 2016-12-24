class Group{
  constructor(title, listItem){
    this.title = title;
    this.listItem = listItem;
  }
}

let xeCo = new Group('Xe co', ['Xe may', 'Oto', 'Xe dap', 'Xe khac']);
let batDongSan = new Group('Bat dong san', ['Chung cu', 'Nha dat', 'Van phong']);
let doDienTu = new Group('Do dien tu', ['Dien thoai', 'May tinh bang', 'Laptop', 'Tivi']);
let arrayGroup = [xeCo, batDongSan, doDienTu, xeCo, batDongSan, doDienTu, xeCo, batDongSan, doDienTu, xeCo, batDongSan, doDienTu];
module.exports = arrayGroup;
