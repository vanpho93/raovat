import React from 'react';
import ItemNavLeft from 'ItemNavLeft';
import {connect} from 'react-redux';
class LeftNavList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    var {arrayGroup} = this.props;
    return (
      <div className="nav-left medium-4 large-2 columns float-left hide-for-small-only">
          {
            arrayGroup.map((e, i) =>
            <ItemNavLeft title={e.title} listItem={e.listItem} key={e.title}/>)
          }
      </div>
    )
  }
}

module.exports = connect(function(state){
  return {arrayGroup: state.mangCategory}
})(LeftNavList);
