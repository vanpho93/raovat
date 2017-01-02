import React, {Component} from 'react';
import TopNav from 'TopNav';
import ListProduct from 'ListProduct';
import {connect} from 'react-redux';
import ViewMain from 'ViewMain';
class Main extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <TopNav/>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
  componentDidMount(){
    var {dispatch} = this.props;
    $.get('/api/category', data => {
      dispatch({type: 'ADD_CATEGORY', array: data});
    });
    $.get('/api/all', data => {
      dispatch({type: 'LOAD_PRODUCT_ARRAY', array: data});
    });
    $.get('/api/district', data => {
      dispatch({type: 'LOAD_DISTRICT_ARRAY', array: data})
    });
    $.get('/check', data => {
      console.log('CHECK LOGIN', data);
      dispatch({type: 'SIGN_IN', username: data.username});
    });
  }
}

module.exports = connect(function(state){
  return state;
})(Main);
