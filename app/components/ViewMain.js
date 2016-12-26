import React from 'react';
import SearchForm from 'SearchForm';
import ListProduct from 'ListProduct';
import Product from 'Product';
class ViewMain extends React.Component{
  render(){
    return (
      <div className="view-main small-10 large-10 medium-10 columns">
        <SearchForm/>
        <ListProduct/>
      </div>
    )
  }
}

module.exports = ViewMain;
