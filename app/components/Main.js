import React, {Component} from 'react';
import TopNav from 'TopNav';

export default class Main extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <TopNav/>
        <h1>Main Component</h1>
        {this.props.children}
      </div>
    )
  }
}
