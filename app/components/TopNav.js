import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';

class TopNav extends Component {
  render(){
    console.log('Render');
    var xhtml = this.props.username?
      <li><Link to="/taikhoan/thongtintaikhoan">{this.props.username}</Link></li>
      :<li><Link to="/taikhoan/dangnhap" activeClassName="active">Tài khoản</Link></li>;
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"><img width="30px" src="icon.png"/></li>
            <li><IndexLink to="/" activeClassName="active">Rao vặt</IndexLink></li>
            <li><Link to="/chitiet" activeClassName="active">Chi tiết</Link></li>
            <li><Link to="/lienhe" activeClassName="active">Liên hệ</Link></li>
            <li><Link to="/tuyendung" activeClassName="active">Giới thiệu</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><Link to="/dangtin" activeClassName="active">Đăng tin</Link></li>
            {xhtml}
            <li><input type="search" placeholder="Bạn muốn tìm gì?"/></li>
            <li><button type="button" className="button">Tìm kiếm</button></li>
          </ul>
        </div>
      </div>
    )
  }
}

module.exports = connect(function(state){
  return {username: state.user}
})(TopNav);
