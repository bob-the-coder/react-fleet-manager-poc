import React, {Component} from 'react';

import './tabs.css';
/*
	<Tabs panels={['panel 1', 'panel 2', 'panel 3']} activePanel='panel 1'>
		<Tab panel='panel 1'>
			SOME HTML
		</Tab>
		<Tab panel='panel 2'>
			SOME HTML
		</Tab>
		<Tab panel='panel 3'>
			SOME HTML
		</Tab>
	</Tabs>
*/

export class Tabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: this.props.activePanel || this.props.panels[0]
		}
	}

	updateTabs(panels, activeTab) {
		for (let i = 0; i < panels.length; i++) {
			let panel = panels[i];

			let attr;
			for (let j = 0; j < panel.attributes.length; j++){
				if(panel.attributes[j].name === 'panel') {
					attr = panel.attributes[j].value;
					break;
				}
			}
			
			if(attr === activeTab) {
				panel.className = '';
			} else {
				panel.className = 'display-none';
			}
		}
	}

	openTab(elem, label) {
		let panels = elem.parentElement.parentElement.children[1].children;
		
		this.updateTabs(panels, label);

		this.setState({
			activeTab: label
		})
	}

	renderPanel(label) {
		let $active = label === this.state.activeTab ? ' active' : '';
		return <div className={'tab-label' + $active} onClick={event => this.openTab.bind(this)(event.target, label)}>{label}</div>
	}

	renderTabPanel(tabContent){
		let $hidden = tabContent.props.panel === this.state.activeTab ? '' : 'display-none';
		return (
			<div className={$hidden} panel={tabContent.props.panel}>{tabContent}</div>
		);
	}

	render() {
		let $labels = this.props.panels.map(label => this.renderPanel(label));
		let $tabs = this.props.children.map(tabContent => this.renderTabPanel(tabContent));

		return (
			<div className='white-block tabs'>
				<div className='tab-labels'>
					{$labels}
				</div>
				<div className='tab-content-wrapper'>
					{$tabs}
				</div>
			</div>
		);
	}
}

export class Tab extends Component {
	render() {
		return (
			<div panel={this.props.panel}>{this.props.children}</div>
		);
	}
}