import React, { Component } from 'react';
import { convertFaceToNumbers } from './convertFaceToNumbers';
import { decodeHTML } from './decodeHTML';
import './css/currentRound.css';

class HigherLower extends Component {
  constructor(props) {
    super(props);
    this.state = { higher: true }
    this.lightUpArrow = this.lightUpArrow.bind(this);
  }
  componentDidUpdate() {
    let val = this.lightUpArrow(this.props.lastCard, this.props.nextCard);
    this.setState({ higher: val });
  }
  lightUpArrow(prev, next) {
    let previousCard = convertFaceToNumbers(prev.card) || '0';
    let nextCard = convertFaceToNumbers(next.card);
    if (previousCard < nextCard)
      return true;
    if (previousCard > nextCard)
      return false;
    if (previousCard == nextCard)
      return false;
  }
  render () {
    let arrow;
    (this.state.higher) ?  arrow = (<i className="arrow fa fa-arrow-up"></i>) : arrow =(<i className="arrow fa fa-arrow-down"></i>);
    return (
      <div id='higherLowerBox'>
        { arrow }
      </div>
    )
  }
}

export default HigherLower;
