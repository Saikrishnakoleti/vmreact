import React, { PureComponent  } from 'react';

class ProjectRule extends PureComponent {
	constructor(props){
		super(props);
	}
	update=(event)=>{
		this.props.selection(event.target.checked);
	}
	render(){
		return(
			<li> 
				<input type="checkbox" onChange={this.update}
				defaultChecked ={this.props.active} />  
                {this.props.projectName}
                
			</li>
		)
	}
}
export default ProjectRule;