import React from 'react';
import ReactDOM from 'react-dom';

class Ring extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        ringNo: this.props.ringNo,
        animate: ""
      }
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.slideNo >= 1)
        this.state.animate = "animate";
      else
        this.state.animate = "";	
      // console.log(nextProps.slideNo);
    }

    render() {
      return <img className={`ring ${this.state.ringNo} ${this.state.animate}`} src={'img/'+this.props.src} />
    }
};

class RingGroup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      no: this.props.src.length,
      src: this.props.src
    }
  }

  render() {
    const rings = this.state.src.map((x,i) => {
      return <Ring ringNo={`r${i}`} slideNo={this.props.slideNo} src={x}></Ring>
    });
    console.log(rings)
    return (
      <React.Fragment>
      {rings}
      </React.Fragment>
    );
  }
};

module.exports = {
  Ring: Ring,
  RingGroup : RingGroup
}