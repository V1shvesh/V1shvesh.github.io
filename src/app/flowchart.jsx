import React from 'react';
import ReactDOM from 'react-dom';
import { Stage, Layer, Line } from "react-konva";

class Flowchart extends React.Component {
	constructor(props){
		super(props);
		this.vw = window.innerWidth;
		this.vh = window.innerHeight;
		this.state={color:"blue", points: [this.vw/2,this.vh*(0.5)]};
		this.animate = () => {
			var points = this.state.points;
			points = points.concat(this.vw/2,this.vh)
		   
			this.refs.line.to({points, duration: 0.9});
			this.setState({points: points});

		}
		this.props.flowTriggerFunc(this.animate);
	}
	
    componentDidMount() {
        // log stage react wrapper
        console.log(this.refs.stage);
        // log Konva.Stage instance
		console.log(this.refs.stage.getStage());
		console.log(this.refs.line);
      }
      render() {
        return (
        <Stage className="stage-konva" ref="stage" width={this.vw} height={this.vh}>
			<Layer>
				<Line
				points={this.state.points}
				stroke={this.state.color}
				strokeWidth={15}
				lineCap="square"
				lineJoin="round"
				/>
			</Layer>
        </Stage>
        );
      }
};

export default Flowchart;