import React, {Component} from 'react';
import Product from 'Product';
export default class ListProduct extends Component {
  render(){
    return (
      <div>
        <Product/>
        <Product/>
        <Product/>
      </div>
    )
  }
  componentDidMount(){
    
  }
}
