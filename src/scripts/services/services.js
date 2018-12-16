import React, { Component } from "react";
import appConfig from '../appConfig/appconfig';
import axios from 'axios';
import RuleService from '../ruleService/ruleService';
class Services extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rules: []
    }
  }
  componentDidMount() {
    axios.get(appConfig.ruleUrl)    
      .then(({data}) => {
        this.setState({
          rules:data
        })
      });
  }
  saveSelection=event=> {
    console.log(this.state.rules)
    axios.post(appConfig.ruleUrl, this.state.rules)
  }
  
  updateSelection(selected){
    this.selected=selected;
  }
  render() {
    return <div>
      <ul>
        {this.state.rules.map((item, i) => 
          <RuleService name={item.name} text={item.text} 
            selected={item.selected} 
            selectionMethod={this.updateSelection.bind(item)}  key={i} 
          />)}
      </ul>
      <button type="button" className="btn btn-primary button aqua" onClick={this.saveSelection}>Save</button>
    </div>
  }
}
export default Services;