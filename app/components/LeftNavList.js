import React from 'react';
import ItemNavLeft from 'ItemNavLeft';
import arrayGroup from '../model/Group.js';
export default class LeftNavList extends React.Component{
  render(){
    return (
      <div className="nav-left small-2 medium-2 large-2 columns float-left">
          {
            arrayGroup.map((e, i) =>
            <ItemNavLeft title={e.title} listItem={e.listItem} key={i}/>)
          }
      </div>
    )
  }
}
