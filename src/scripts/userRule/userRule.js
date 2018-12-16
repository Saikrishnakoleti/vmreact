import React, { PureComponent  } from 'react';

class UserRule extends PureComponent {
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
				{this.props.userName}
			</li>
		)
	}
}
export default UserRule;