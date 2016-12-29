import React from 'react';
import ItemNavLeft from 'ItemNavLeft';
export default class LeftNavList extends React.Component{
  constructor(props){
    super(props);
    this.state = {arrayGroup: []};
  }
  render(){
    var {arrayGroup} = this.state;
    return (
      <div className="nav-left medium-4 large-2 columns float-left hide-for-small-only">
          {
            arrayGroup.map((e, i) =>
            <ItemNavLeft title={e.title} listItem={e.listItem} key={e.title}/>)
          }
      </div>
    )
  }
  componentDidMount(){
    $.get('/api/category', data => {
      this.state.arrayGroup = data;
      this.setState(this.state);
    });
  }
}
