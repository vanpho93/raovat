import React from 'react';

class DangTin extends React.Component{
  render(){
    return (
      <div className="small-8 small-centered columns">
        <h1 className="title-dang-tin text-center">Đăng tin rao vặt</h1>
        <form action="/xulydangtin" method="post" encType="multipart/form-data">
          <input type="text" name="title" placeholder="Tiêu đề" /><br/>
          <textarea rows="5" placeholder="Mo ta" name="description"/><br/>
          <input type="text" name="address" placeholder="Địa chỉ" /><br/>
          <input type="text" name="price" placeholder="Gia" /><br/>
          <input type="text" name="name" placeholder="Ten" /><br/>
          <input type="text" name="phone" placeholder="So dien thoai" /><br/>
          <select name="district">
            <option>--Quan, huyen--</option>
            <option value="1">Quan 1</option>
            <option value="2">Quan 2</option>
            <option value="3">Quan 3</option>
          </select>
          <select name="tieuMuc">
            <option value="1">Oto</option>
            <option value="2">Xe may</option>
            <option value="3">Xe dap</option>
          </select>
          <input type="file" name="avatar" /><br/>
          <input type="submit" className="expanded button" value="Submit"/>
        </form>
      </div>
    )
  }
}
module.exports = DangTin;
