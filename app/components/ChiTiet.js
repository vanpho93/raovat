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
      <h1>{sanPham.tieuDe}</h1>
      <img src={sanPham.hinh} width="200px"/>
      <p>{sanPham.moTa}</p>
      <h3>{sanPham.gia}</h3>
      <h3>{sanPham.nguoiDang}</h3>
      <p>{'So dien thoai: '+sanPham.sdt}</p>
    </div>
    return (
      <div className="small-8 medium-6 large-4 columns small-centered">
        {xhtml}
      </div>
    )
  }
  componentDidMount(){
    var id = this.props.location.query.id;
    $.get('/api/' + id, data => {
      this.state.sanPham = data;
      this.setState(this.state);
      console.log('data');
    });
  }
}
