import React from 'react';
import ReactDOM from 'react-dom';

class Flowchart extends React.Component {
	constructor(props){
		super(props);
		this.vw = window.innerWidth;
		this.vh = window.innerHeight;
		this.state = {
			color:"blue",
			points: [this.vw/2,this.vh*(0.5)],
			animate: ""
		};
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.trigger && nextProps.slideNo == 1)
			this.state.animate = " animate";
		else if(nextProps.trigger && nextProps.slideNo == 0)
			this.state.animate = " ";	
		console.log(nextProps.slideNo);
	}

	render(){
		return (
		<div className = "flow-container">
			<div className = {"flow-vertical" + this.state.animate}></div>
			<div className = {"flow-curve left" + this.state.animate}></div>
			<div className = {"flow-curve right" + this.state.animate}></div>
			<div className = {"flow-horizontal left" + this.state.animate}></div>
			<div className = {"flow-horizontal right" + this.state.animate}></div>
		</div>
		);
	}
    
};

export default Flowchart;