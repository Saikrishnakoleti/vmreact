import React, { Component } from "react";
import {Link} from "react-router-dom";
class Profile extends Component {
  render() {
    return (
      
      <ul className="navbar-nav compound">
        <li className="nav-item dropdown">
          <a className="navbar-brand dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
            Profile
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link to="/myprofile" className=" dropdown-item" replace>My Profile</Link>
            <Link to="/logout" className=" dropdown-item" replace>Log Out</Link>
          </div>
        </li>
      </ul>
    )
  }
}
export default Profile;
