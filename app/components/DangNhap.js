import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
class DangNhap extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    console.log(username, password);
    $.post('/dangnhap', {username, password}, data => {
      console.log(data);
    });
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1 className="title-tai-khoan text-center">Đăng nhập</h1>
          <input type="text" placeholder="username" ref="username"/>
          <br/>
          <input type="text" placeholder="password" ref="password"/>
          <br/>
          <button className="expanded button" type="submit">Đăng nhập</button>
          <p>Bạn chưa có tài khoản? <Link to="taikhoan/dangky">Đăng ký</Link></p>
        </form>
      </div>
    );
  }
}

module.exports = DangNhap;
