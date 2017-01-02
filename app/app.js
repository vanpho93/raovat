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
import ChiTietAdmin from 'ChiTietAdmin';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

var redux = require('redux');
import {Provider} from 'react-redux';
var defaultState = {mangCategory: [], mangSanPham: [], user: undefined, mangDistricts: []}

var reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {...state, mangCategory: action.array}
    case 'LOAD_PRODUCT_ARRAY':
      return {...state, mangSanPham: action.array}
    case 'SIGN_IN':
      console.log(action.username);
      return {...state, user: action.username}
    case 'LOAD_DISTRICT_ARRAY':
      return {...state, mangDistricts: action.array}
    default:
      return state;
  }
}

var store = redux.createStore(reducer);

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!./css/style.css');
$(document).foundation();

var checkLogin = (nextState, replace, next) => {
  console.log('Enter here');
  $.get('/check', (data) => {
    if(data.isLogin != true){
      replace('/taikhoan/dangnhap');
      console.log('Chua dang nhap');
    }
    next();
  });
}

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Main}>
            <IndexRoute component={RaoVat}/>
            <Route path="lienhe" component={About}/>
            <Route path="tuyendung" component={TuyenDung}/>
            <Route path="dangtin" component={DangTin} onEnter={checkLogin}/>
            <Route path="chitiet" component={ChiTiet}/>
            <Route path="taikhoan/:com" component={TaiKhoan}/>
            <Route path="admin" component={Admin}/>
            <Route path="chitietAdmin" component={ChiTietAdmin}/>
          </Route>
        </Router>
    </Provider>
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
