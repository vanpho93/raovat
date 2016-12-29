import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Product extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var {id, title, description, name, phone, image, address, price, postTime} = this.props.info;
    return (
      <div className="product-wrapper">
        <div className="div-product">
          <img src={image} width="50px" className="img-product"/>
          <div className="div-product-info">
            <Link to={"/chitiet?id=" + id}>{title}</Link>
            <div>Gia: {price} d</div>
            <a href="#">{address}</a>
          </div>
        </div>
        <p className="p-start-time">{postTime}</p>
        <hr/>
      </div>
    )
  }
}
