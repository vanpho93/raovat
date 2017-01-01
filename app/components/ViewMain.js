import React from 'react';
import SearchForm from 'SearchForm';
import ListProduct from 'ListProduct';
import Product from 'Product';
class ViewMain extends React.Component{
  render(){
    return (
      <div className="view-main large-10 medium-8 columns">
        <SearchForm/>
        <ListProduct route="/api/all"/>
      </div>
    )
  }
}

module.exports = ViewMain;
