import React, {Component} from 'react';
import TopNav from 'TopNav';
import ListProduct from 'ListProduct';
import ViewMain from 'ViewMain';
export default class Main extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <TopNav/>
        <ViewMain/>
        <ListProduct/>
        {this.props.children}
      </div>
    )
  }
}
