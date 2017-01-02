import React from 'react';
import ListProduct from 'ListProduct';
import {connect} from 'react-redux';

class Admin extends React.Component{
  render(){
    return (
      <div>
        <ListProduct route='/admin/unchecklist' toDetail="/chitietAdmin"/>
      </div>
    )
  }
  componentDidMount(){
    var {dispatch} = this.props;
    $.get('/admin/unchecklist', data => {
      dispatch({type: 'LOAD_PRODUCT_ARRAY', array: data});
    });
  }
}

module.exports = connect()(Admin);
