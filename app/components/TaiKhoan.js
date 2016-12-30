import React from 'react';
import {Route, Router, hashHistory, IndexRoute, Link, IndexLink} from 'react-router';
import DangKy from 'DangKy';
import DangNhap from 'DangNhap';
import ThongTinTaiKhoan from 'ThongTinTaiKhoan';
class TaiKhoan extends React.Component{
  render(){
    var xhtml;
    switch (this.props.params.com) {
      case 'dangnhap':
        xhtml = <DangNhap/>
        break;
      case 'dangky':
        xhtml = <DangKy/>
        break;
      default:
        xhtml = <ThongTinTaiKhoan/>
        break;
    }
    return (
      <div className="small-6 small-centered">
        {xhtml}
      </div>
    );
  }
}

module.exports = TaiKhoan;
