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
      slides: [
        <Slide>
          <Profile></Profile>
        </Slide>,
        <Slide></Slide>
      ],
      slideChange: false,
      slideNo: 1
    }
    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
  }

  onSlideChangeStart(name, props, state, newState){
    this.setState({slideChange: true, slideNo: newState.activeSlide});
    console.log(this.state.slideNo);
  }

  render(){
    fullPageOptions.slides = this.state.slides;
    return (
      <React.Fragment>
        <Fullpage {...fullPageOptions} 
        onSlideChangeStart = {this.onSlideChangeStart}
        onSlideChangeEnd = {() => this.setState({slideChange: false})} />
        <Flowchart trigger={this.state.slideChange} slideNo={this.state.slideNo} > </Flowchart>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);