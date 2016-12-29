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
    let xhtml = this.state.isShow?null:listItem.map(e =>
      <div key={e.id}>
        <a onClick={()=>{this.getList(e.id)}}>{e.tieuMuc}</a>
      </div>
    );
    let icon = this.state.isShow?"►":"▼";
    return (
      <div>
        <div><span onClick={this.toggle.bind(this)}>{icon}</span>{title}</div>
        <ul className="list-item-left-nav">
          {xhtml}
        </ul>
      </div>
    )
  }
  getList(id){
    $.get('/api/getByTieuMuc/' + id, data => {
      that.state.mang = data;
      that.setState(that.state);
    })
  }
}
