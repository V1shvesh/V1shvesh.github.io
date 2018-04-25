import React from 'react';
import ReactDOM from 'react-dom';

class Ring extends React.Component {
    render() {
      return <img class="ring" src={'img/'+this.props.src} />
    }
};

export default Ring;