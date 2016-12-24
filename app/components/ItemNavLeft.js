import React from 'react';

export default class ItemNavLeft extends React.Component{
  constructor(props){
    super(props);
    this.state = {isShow: true}
  }
  toggle(){
    this.state.isShow = !this.state.isShow;
    this.setState(this.state)
  }
  render(){
    let {title, listItem} = this.props;
    let xhtml = this.state.isShow?null:listItem.map((e, i) => <li key={i}>{e}</li>);
    let icon = this.state.isShow?"►":"▼";
    return (
      <div>
        <div><a onClick={this.toggle.bind(this)}>{icon}</a>{title}</div>
        <ul className="list-item-left-nav">
          {xhtml}
        </ul>
      </div>
    )
  }
}
