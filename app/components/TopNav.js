import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

export default class Main extends Component {
  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">raovat.vn</li>
            <li><IndexLink to="/" activeClassName="active">Rao vat</IndexLink></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/tuyendung" activeClassName="active">Tuyen Dung</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search"/></li>
            <li><button type="button" className="button">Search</button></li>
          </ul>
        </div>
      </div>
    )
  }
}
