import React from 'react';

class DangKy extends React.Component{
  render(){
    return (
      <div>
        <form action="/dangky" method="post" encType="multipart/form-data">
          <h1 className="title-tai-khoan text-center">Đăng ký tài khoản</h1>
          <input type="text" placeholder="username" name="username"/>
          <input type="password" placeholder="password" name="password"/>
          <input type="password" placeholder="password"/>
          <input type="text" placeholder="Họ và tên" name="fullname"/>
          <input type="text" placeholder="Số điện thoại" name="phone"/>
          <input type="text" placeholder="Email" name="email"/>
          <input type="file" name="avatar"/>
          <button type="submit" className="button expanded">Đăng ký</button>
        </form>
      </div>
    );
  }
}

module.exports = DangKy;
