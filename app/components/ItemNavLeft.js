import React from 'react';

export default class ItemNavLeft extends React.Component{

  render(){
    let {title, listItem} = this.props;
    return (
      <div>
        <p>{title}</p>
        <ul className="list-item-left-nav">
          { listItem.map((e, i) => <li key={i}>{e}</li> )}
        </ul>
      </div>
    )
  }
}
