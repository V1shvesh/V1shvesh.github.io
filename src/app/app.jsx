import React from 'react';
import ReactDOM from 'react-dom';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';

import Profile from './profile.jsx'
import Flowchart from './flowchart'

let i=0;

const fullPageOptions = {
  scrollSensitivity: 10,
  touchSensitivity: 10,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flowTrigger: ()=>console.log("Change" + ++i)
    }
    this.state.slides = [
      <Slide>
        <Profile></Profile>
        <Flowchart flowTrigger = {this.state.flowTrigger} 
    flowTriggerFunc = {(flowTrigger) => this.setState({flowTrigger})}> </Flowchart>
      </Slide>,
      <Slide></Slide>
    ]
  }
  render(){
    fullPageOptions.slides = this.state.slides;
    return (
      <Fullpage {...fullPageOptions}  
      onSlideChangeStart={this.state.flowTrigger}/>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);