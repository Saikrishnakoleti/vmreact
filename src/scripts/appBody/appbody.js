import React,{ Component } from "react";
import { Route } from "react-router-dom";
import Autofixr from "../autoFixr/autofixr";
import ManageDashBoard from "../manageDashBoard/managedashboard";
import MyDashBoard from "../myDashBoard/mydashboard";
import MyProfile from "../myProfile/myprofile";
import LogOut from "../logOut/logout";
import Services from "../services/services";
import UserService from "../userServices/userService";
import ProjectService from "../projectService/projectService";
import Settings from "../settings/settings";

class AppBody extends Component {
  render() {
    return (
      <div className="content mt-5">
        <Route exact path={"/autofixr"} component={Autofixr}/>
        <Route path={"/mydashboard"} component={MyDashBoard}/>
        <Route path={"/managedashboard"} component={ManageDashBoard}/>
        <Route path={"/settings"} component={Settings}/>
        <Route path={"/myprofile"} component={MyProfile}/>
        <Route path={"/logout"} component={LogOut}/>
        <Route path={"/services"} component={Services}/>
        <Route path={"/userService"} component={UserService}/>
        <Route path={"/projectService"} component={ProjectService}/>
      </div>
    );
  }
}
export default AppBody;
