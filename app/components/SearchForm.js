import React from 'react';

class SearchForm extends React.Component{
  render(){
    return (
      <div className="row search-form">
        <div className="columns medium-4">
          <input type="text" placeholder="Search"/>
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
          <button className="button">Tim kiem</button>
        </div>
      </div>
    )
  }
}

module.exports = SearchForm;
