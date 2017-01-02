import React, {Component} from 'react';
import {Link} from 'react-router';

Number.prototype.formatMoney = function(c, d, t){
var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

export default class Product extends Component {
  constructor(props){
    super(props);
  }
  render(){
    //Create for reuse Product
    var {toDetail} = this.props;
    var {id, title, description, name, phone, image, address, price, postTime} = this.props.info;
    return (
      <div className="product-wrapper">
        <div className="div-product">
          <img src={image} width="50px" className="img-product"/>
          <div className="div-product-info">
            <Link to={`${toDetail}?id=${id}`}>{title}</Link>
            <div>Gia: {parseInt(price).formatMoney(0, '.', '.')} d</div>
            <a href="#">{address}</a>
          </div>
        </div>
        <p className="p-start-time">{postTime}</p>
        <hr/>
      </div>
    )
  }
}
