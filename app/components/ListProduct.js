import React, {Component} from 'react';
import Product from 'Product';
export default class ListProduct extends Component {
  constructor(props){
    super(props);
    this.state = {mang: []};
    that = this;
  }
  render(){
    var {mang} = this.state;
    return (
      <div>
        {mang.map(e => <Product key={e.id} info={e}/>)}
      </div>
    )
  }
  componentDidMount(){
    $.get('/api/all', data => {
      this.state.mang = data;
      this.setState(this.state);
    })
  }
}
