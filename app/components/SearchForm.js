import React from 'react';

class SearchForm extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    $.post('/api/search', {text: this.refs.txt.value}, data => {
      that.state.mang = data;
      that.setState(that.state);
    });
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div className="row search-form">
        <div className="columns medium-4">
          <input type="text" placeholder="Search" ref="txt"/>
        </div>
        <div className="columns medium-3">
          <select>
            <option>--Chon danh muc--</option>
            <option>Dien thoai</option>
            <option>May tinh</option>
            <option>Tivi</option>
          </select>
        </div>
        <div className="columns medium-3">
          <select>
            <option>Chon dia diem</option>
            <option>Quan 1</option>
            <option>Quan 2</option>
            <option>Quan 3</option>
            <option>Quan 4</option>
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

module.exports = SearchForm;
