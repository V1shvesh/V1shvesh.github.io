import React from 'react';
import ReactDOM from 'react-dom';

class Flowchart extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			animate: ""
		};
	}

	componentWillMount(){
		if(this.props.slideNo >= 1)
			this.state.animate = " animate";
		else
			this.state.animate = " ";	
		// console.log(this.props.slideNo);
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.slideNo >= 1)
			this.state.animate = " animate";
		else
			this.state.animate = " ";	
		// console.log(nextProps.slideNo);
	}

	render(){
		return (
		<React.Fragment>
			<div className = {"flow-vertical" + this.state.animate}></div>
			<div className = {"flow-curve left down" + this.state.animate}></div>
			<div className = {"flow-curve right down" + this.state.animate}></div>
			<div className = {"flow-horizontal left" + this.state.animate}></div>
			<div className = {"flow-horizontal right" + this.state.animate}></div>
			<div className = {"flow-curve left up" + this.state.animate}></div>
			<div className = {"flow-curve right up" + this.state.animate}></div>
			<div className = {"flow-pavillion" + this.state.animate}></div>
		</React.Fragment>
		);
	}
    
};

export default Flowchart;