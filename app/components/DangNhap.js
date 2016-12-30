import React from 'react';
import {Link} from 'react-router';
class DangNhap extends React.Component{
  render(){
    return (
      <div>
        <form>
          <h1 className="title-tai-khoan text-center">Đăng nhập</h1>
          <input type="text" placeholder="username"/>
          <br/>
          <input type="text" placeholder="password"/>
          <br/>
          <button className="expanded button" type="submit">Đăng nhập</button>
          <p>Bạn chưa có tài khoản? <Link to="taikhoan/dangky">Đăng ký</Link></p>
        </form>
      </div>
    );
  }
}

module.exports = DangNhap;
