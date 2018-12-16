import React, { Component  } from 'react';


class RuleService extends Component {
	constructor(props){
		super(props);
	}
	updateSelection=(event)=>{
		this.props.selectionMethod(event.target.checked);
	}
	render(){
		return(
			<li>
				<input id = "checked" type="checkbox" onChange={this.updateSelection}
				defaultChecked ={this.props.selected} />  
				{this.props.text}
			</li>
		)
	}
}
export default RuleService;