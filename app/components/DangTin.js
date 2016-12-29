import React from 'react';

class DangTin extends React.Component{
  render(){
    return (
      <form action="/xulydangtin" method="post" encType="multipart/form-data">
      <input type="text" name="username" placeholder="Username" /><br/>
      <input type="password" name="password" placeholder="Password" /><br/>
      <input type="text" name="email" placeholder="Email" /><br/>
      <input type="file" name="avatar" /><br/>
      <input type="submit" value="Submit"/>
    </form>
    )
  }
}
module.exports = DangTin;
