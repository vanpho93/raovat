import React, {Component} from 'react';

export default class Product extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="product-wrapper">
        <div className="div-product">
          <img src="1.jpg" width="50px" className="img-product"/>
          <div className="div-product-info">
            <a href="">Nh banh va xich du</a>
            <div>Gia: 5.000.000 d</div>
            <a href="#">Sai gon</a>
          </div>
        </div>
        <p className="p-start-time">4 phut truoc</p>
        <hr/>
      </div>
    )
  }
}
