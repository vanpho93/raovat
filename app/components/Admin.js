import React from 'react';
import ListProduct from 'ListProduct';
class Admin extends React.Component{
  render(){
    return (
      <div>
        <ListProduct route='/admin/unchecklist' toDetail="/chitietAdmin"/>
      </div>
    )
  }
}

module.exports = Admin;
