import React from 'react';
import {connect} from 'react-redux';
class LeftNavList extends React.Component{
  constructor(props){
    super(props);
  }
  searchByCategory(id){
    console.log(id);
  }
  render(){
    var {arrayGroup} = this.props;
    console.log('Array Group: ',arrayGroup);
    return (
      <div className="nav-left medium-4 large-2 columns float-left hide-for-small-only">
        <ul className="menu vertical">
          {
            arrayGroup.map((e, i) =>
            <li key={e.id}><a onClick={() => this.searchByCategory(e.id)}>{e.tenDanhMuc}</a></li>)
          }
        </ul>
      </div>
    )
  }
}
module.exports = connect(function(state){
  return {arrayGroup: state.mangCategory}
})(LeftNavList);
