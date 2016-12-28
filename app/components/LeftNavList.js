import React from 'react';
import ItemNavLeft from 'ItemNavLeft';
import arrayGroup from '../model/Group.js';
export default class LeftNavList extends React.Component{
  render(){
    return (
      <div className="nav-left medium-4 large-2 columns float-left hide-for-small-only">
          {
            arrayGroup.map((e, i) =>
            <ItemNavLeft title={e.title} listItem={e.listItem} key={i}/>)
          }
      </div>
    )
  }
}
