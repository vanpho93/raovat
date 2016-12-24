import React from 'react';
import SearchForm from 'SearchForm';
class ViewMain extends React.Component{
  render(){
    return (
      <div className="view-main small-10 large-10 medium-10 columns">
        <SearchForm/>
      </div>
    )
  }
}

module.exports = ViewMain;
