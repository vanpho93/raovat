import React from 'react';
import {connect} from "react-redux";

class SearchForm extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    $.post('/api/search', {text: this.refs.txt.value}, info => {
      console.log(info);
      that.state.mang = info;
      that.setState(that.state);
    });
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div className="row search-form">
        <div className="columns medium-4">
          <input type="text" placeholder="Tên sản phẩm" ref="txt"/>
        </div>
        <div className="columns medium-3">
          <select>
            <option> Chọn danh mục </option>
            {
              this.props.mangCategory.map(e => <option value={e.id} key={e.title}>{e.title}</option>)
            }
          </select>
        </div>
        <div className="columns medium-3">
          <select>
            <option>-- Chọn địa điểm --</option>
            {this.props.mangDistricts.map(e => <option
              value={e.id} key={e.id}>{e.tenQuan}</option>)}
          </select>
        </div>
        <div className="columns medium-2">
          <button className="button" type="submit">Tim kiem</button>
        </div>
      </div>
    </form>
    )
  }
}

module.exports = connect(function(state){
  return {
    mangDistricts: state.mangDistricts,
    mangCategory: state.mangCategory
  }
})(SearchForm);
