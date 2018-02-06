import React, {Component} from 'react';
import './notify.css';

class Notify extends Component{
	constructor(props){
		super(props);

		this.state = {
			on: false
		}
	}

	componentDidMount(){
		let $this = this;
		this.setState({
			on: true
		});
		setTimeout(function(){
			$this.setState({
				on: false
			})
		}, 2000);
	}

	render(){
		var $className = 'notify ' + this.props.type;
		if(!this.state.on) return (<span></span>);
		return (
			<div className={$className}>
			<div className='notify-bar'></div>
				{this.props.message}
			</div>
		);
	}
}

export default Notify;