import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from 'Main';
import About from 'About';
import RaoVat from 'RaoVat';
import TuyenDung from 'TuyenDung';
import DangTin from 'DangTin';
import ChiTiet from 'ChiTiet';
import TaiKhoan from 'TaiKhoan';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!./css/style.css');
$(document).foundation();

var checkLogin = (nextState, replace, next) => {
  console.log('Enter here');
  next();
}

class App extends Component {
  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={RaoVat}/>
          <Route path="lienhe" component={About}/>
          <Route path="tuyendung" component={TuyenDung}/>
          <Route path="dangtin" component={DangTin}/>
          <Route path="chitiet" component={ChiTiet}/>
          <Route path="taikhoan/:com" component={TaiKhoan} onEnter={checkLogin}/>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
