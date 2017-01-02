import React, {Component} from 'react';
import Product from 'Product';
import {connect} from 'react-redux';

class ListProduct extends Component {
  constructor(props){
    super(props);
    this.state = {mang: []};
    that = this;
  }
  render(){
    var {mangSanPham} = this.props;
    var {toDetail} = this.props;
    return (
      <div>
        {mangSanPham.map(e => <Product key={e.id} info={e} toDetail={toDetail}/>)}
      </div>
    )
  }
}

module.exports = connect(function(state){
  return {mangSanPham: state.mangSanPham}
})(ListProduct);
