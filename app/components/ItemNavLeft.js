import React from 'react';

export default class ItemNavLeft extends React.Component{
  constructor(props){
    super(props);
    this.state = {isShow: fasle}
  }
  render(){
    let {title, listItem} = this.props;
    return (
      var xhtml = this.state.isShow? listItem.map((e, i) => <li key={i}>{e}</li>):<p/>;
      <div>
        <div><a>></a>{title}</div>
        <ul className="list-item-left-nav">
          {xhml}
        </ul>
      </div>
    )
  }
}
