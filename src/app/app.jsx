import React from 'react';
import ReactDOM from 'react-dom';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';

import Ring from './ring.jsx';

const fullPageOptions = {
  scrollSensitivity: 7,
  touchSensitivity: 7,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};

const slides = [
  <Slide> <Ring src='profile.jpg'></Ring> </Slide>,
  <Slide> Slide 2 </Slide>
];
fullPageOptions.slides = slides;

ReactDOM.render(
  <Fullpage {...fullPageOptions} />,
  document.getElementById('app')
);