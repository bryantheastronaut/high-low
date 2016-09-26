import React, { Component } from 'react';
import './css/currentRound.css';

class CurrentRound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.cards);
    return (
      <div id='currentRound'>
        <h1>{ this.props.cards.player.card } VS. { this.props.cards.cpu.card }</h1>
      </div>
    )
  }
}

export default CurrentRound;
