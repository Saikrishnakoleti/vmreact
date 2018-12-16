import React, { Component } from "react";
import appConfig from '../appConfig/appconfig';
import axios from 'axios';
import UserRule from '../userRule/userRule';

class UserService extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }
  componentDidMount() {
    axios.get(appConfig.userUrl)    
      .then(({data}) => {
        this.setState({
          user:data
        })
      });
  }
  saveSelection=event=> {
    console.log(this.state.user)
    axios.post(appConfig.userUrl, this.state.user)
  }
  
  updateMethod(selected){
    this.selected=selected;
  }
  render() {
    return <div>
      <ul>
        {this.state.user.map((item, i) => 
          <UserRule userName={item.userName} 
            active={item.selected} 
            selection={this.updateMethod.bind(item)}  key={i} />
        )}
      </ul>
      <button type="button" className="btn btn-primary button aqua" onClick={this.saveSelection}>Save</button>
    </div>
  }
}
export default UserService;