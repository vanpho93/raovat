import React, {Component} from 'react';

export default class ChiTiet extends Component {
  constructor(props){
    super(props);
    this.state = {id: 10000}
  }
  render(){
    var {sanPham} = this.state;
    var xhtml = sanPham == undefined?
    <div>
      {this.state.id}
    </div>
    :<div>
      <h1>{sanPham.title}</h1>
      <img src={sanPham.image} width="200px"/>
      <p>{sanPham.description}</p>
      <h3>{sanPham.price}</h3>
      <h3>{sanPham.fullname}</h3>
      <p>{sanPham.address}</p>
      <p>{'So dien thoai: ' + sanPham.phone}</p>
    </div>
    return (
      <div className="small-8 medium-8 large-8 columns small-centered">
        {xhtml}
      </div>
    )
  }
  componentDidMount(){
    var id = this.props.location.query.id;
    if(id){
      $.get('/api/getById/' + id, data => {
        this.state.sanPham = data;
        this.setState(this.state);
        console.log(data);
      });
    }else{
      window.location = '/#/';
    }
  }
}
