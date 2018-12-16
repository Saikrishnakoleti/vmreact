import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Administration extends Component {
  render() {
    return (
      <ul className="navbar-nav">
        <li className="nav-item dropdown ml-3">
          <a className="navbar-brand dropdown-toggle " href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
              Administration
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link  to="/settings" className=" dropdown-item" replace>Settings</Link>
            <Link  to="/services" className="dropdown-item" replace>Rules</Link>
            <Link  to="/userService" className="dropdown-item" replace>User</Link>
            <Link  to="/projectService" className="dropdown-item" replace>Project</Link>
          </div>
        </li>
      </ul>
    )
  }
}
export default Administration;
