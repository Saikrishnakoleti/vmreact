import React, { Component } from "react";
import {Link} from "react-router-dom";
import DashBoard from "../dashBoard/dashboard";
import Administration from '../administration/administration';
class MenuBar extends Component {
  render() {
    return (
        <div className = "control">
          <nav className="navbar navbar-expand-lg ">   
            <ul className="navbar-nav">
              <li><Link className="navbar-brand" to="/autofixr" replace>Autofixr</Link></li>
              <li><Administration/></li>
              <li><DashBoard/></li>
            </ul>
          </nav>
        </div>
    );
  }
}
export default MenuBar;
