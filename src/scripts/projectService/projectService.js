import React, { Component } from "react";
import appConfig from '../appConfig/appconfig';
import axios from 'axios';
import ProjectRule from '../projectRule/projectRule';
class ProjectService extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }
  componentDidMount() {
    axios.get(appConfig.projectUrl)    
      .then(({data}) => {
        this.setState({
          user:data
        })
      });
  }
  saveSelection=event=> {
    console.log(this.state.user)
    axios.post(appConfig.projectUrl, this.state.user)
  }
  
  updateSelection(selected){
    this.selected=selected;
  }
  render() {
    return <div>
      <ul>
        {this.state.user.map((item, i) =>  
          <ProjectRule projectName={item.name} 
             active={item.selected} 
            selection={this.updateSelection.bind(item)}  key={i} />
        )}
      </ul>
      <button type="button" className="btn btn-primary button aqua" onClick={this.saveSelection}>Save</button>
    </div>
  }
}
export default ProjectService;