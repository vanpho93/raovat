import React from 'react';

class DangKy extends React.Component{
  render(){
    return (
      <div>
        <form>
          <h1 className="title-tai-khoan text-center">Đăng ký tài khoản</h1>
          <input type="text" placeholder="username"/>
          <input type="text" placeholder="password"/>
          <input type="text" placeholder="Nhập lại mật khẩu"/>
          <input type="text" placeholder="Số điện thoại"/>
          <input type="text" placeholder="Địa chỉ"/>
          <button type="submit" className="button expanded">Đăng nhập</button>
        </form>
      </div>
    );
  }
}

module.exports = DangKy;
