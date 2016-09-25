import React, { Component } from 'react';
import './css/currentRound.css';

class HigherLower extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div id='higherLowerBox'>
        <i className='arrow fa fa-arrow-down'></i>
        <i className='arrow fa fa-arrow-up'></i>
      </div>
    )
  }
}

export default HigherLower;
