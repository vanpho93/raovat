import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from 'Main';
import About from 'About';
import RaoVat from 'RaoVat';
import TuyenDung from 'TuyenDung';
import DangTin from 'DangTin';
import ChiTiet from 'ChiTiet';
import TaiKhoan from 'TaiKhoan';
import Admin from 'Admin';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!./css/style.css');
$(document).foundation();

var checkLogin = (nextState, replace, next) => {
  console.log('Enter here');
  $.get('/check', (data) => {
    if(data != true){
      replace('/taikhoan/dangnhap');
      console.log('Chua dang nhap');
    }
    next();
  });
}

class App extends Component {
  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={RaoVat}/>
          <Route path="lienhe" component={About}/>
          <Route path="tuyendung" component={TuyenDung}/>
          <Route path="dangtin" component={DangTin} onEnter={checkLogin}/>
          <Route path="chitiet" component={ChiTiet}/>
          <Route path="taikhoan/:com" component={TaiKhoan}/>
          <Route path="admin" component={Admin}/>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
//fix call twice
//Chuc nang dang nhap
//Chuc nang user id
//Chuc nang duyet tin
//Chuc nang admin
