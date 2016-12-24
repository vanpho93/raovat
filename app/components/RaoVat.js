import React from 'react';
import LeftNavList from 'LeftNavList';
import ViewMain from 'ViewMain';
class RaoVat extends React.Component{
  render(){
    return (
      <div className="row">
        <LeftNavList/>
        <ViewMain/>
      </div>
    )
  }
}

module.exports = RaoVat;
