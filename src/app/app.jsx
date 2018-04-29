import React from 'react';
import ReactDOM from 'react-dom';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';

import Profile from './profile'
import Flowchart from './flowchart'
import {Ring, RingGroup} from './ring';

let i=0;

const fullPageOptions = {
  scrollSensitivity: 10,
  touchSensitivity: 10,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};

const ringImg = [
  "placeholder.jpg",
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        <Slide>
          <Profile></Profile>
        </Slide>,
        <Slide>
        <div className="pavillion">
          Yo
        </div>
        </Slide>
      ],
      slideNo: 0
    }
    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
  }

  onSlideChangeStart(name, props, state, newState){
    this.setState({slideNo: newState.activeSlide});
    // console.log(this.state.slideNo);
  }

  render(){
    fullPageOptions.slides = this.state.slides;
    return (
      <React.Fragment>
        <Fullpage {...fullPageOptions} 
        onSlideChangeStart = {this.onSlideChangeStart}
        />
        <RingGroup slideNo={this.state.slideNo} src={ringImg}></RingGroup>
        <Flowchart slideNo={this.state.slideNo} > </Flowchart>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);