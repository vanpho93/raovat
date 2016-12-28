import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from 'Main';
import About from 'About';
import RaoVat from 'RaoVat';
import TuyenDung from 'TuyenDung';
import DangTin from 'DangTin';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!./css/style.css');
$(document).foundation();

class App extends Component {
  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={RaoVat}/>
          <Route path="about" component={About}/>
          <Route path="tuyendung" component={TuyenDung}/>
          <Route path="dangtin" component={DangTin}/>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
