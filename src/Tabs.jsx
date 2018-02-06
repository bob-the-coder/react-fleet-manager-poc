import React, { Component } from 'react';
import './tabs.css';
import Notify from './Notify.jsx';

class Tabs extends Component{
	constructor(props){
		super(props);
		this.state = {
			items: this.props.items || [],
			message: ""
		};
	}

	componentDidMount(){
		this.setState({
			items: this.props.items
		});
	}

	addNewItem(e){
		if(e.which !== 13) return;

		if(!this.refs.newItem.value){
			this.notifyEmptyItem();
			return;
		}

		var currentItems = this.state.items;
		currentItems.push({
			name: this.refs.newItem.value,
			id: Math.random()
		});
		this.setState({
			items: currentItems
		});
		this.refs.newItem.value = "";
	}

	removeItem(item){
		var currentItems = this.state.items;
		currentItems.splice(currentItems.indexOf(item), 1);
		this.setState({
			items:currentItems
		});
	}

	notifyEmptyItem(){
		this.setState({
			message: "Item cannot be empty"
		});
	}

	render() {
		let $items;

		if(this.state.items){
			$items = this.state.items.map((item) => 
				<div className='tab-item' key={this.state.items.indexOf(item)}>
					{item.name} 
					<span className='tab-delete' onClick={this.removeItem.bind(this, item)}>&times;</span>
				</div>);
		}
		return(
			<div className="tab-items">
				{$items}
				<input className='tab-item' ref="newItem" onKeyPress={this.addNewItem.bind(this)} placeholder="Enter an item"/>
				<input className='tab-item tab-btn' onClick={this.addNewItem.bind(this, {which: 13})} type='button' value="Add Item"/>
				<Notify type='error' message={this.state.message} />
			</div>
		);
	}
}

export default Tabs;