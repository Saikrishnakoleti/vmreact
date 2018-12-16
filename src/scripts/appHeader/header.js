import React, { Component } from "react";
import ReactDOM from "react-dom";
import MenuBar from "../navigation/menuBar";
import Profile from '../profile/profile';
class AppHeader extends Component {
  render() {
    return (  
      <div className="fixrmenu">
        <MenuBar/>
        <Profile/>
      </div>
    ) 
  }
}
export default AppHeader;
