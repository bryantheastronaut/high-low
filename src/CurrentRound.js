import React, { Component } from 'react';
import { convertFaceToNumbers } from './convertFaceToNumbers';
import './css/currentRound.css';

class CurrentRound extends Component {
  constructor(props) {
    super(props);
    this.compareScores = this.compareScores.bind(this);
    this.awardPoint = this.awardPoint.bind(this);
  }
  awardPoint(playerScore, cpuScore) {
    let winner;
    if(playerScore === cpuScore) {
      winner = 'tie';
    } else if (playerScore > cpuScore) {
      winner = 'player';
    } else {
      winner = 'cpu';
    }
    return winner;
  }
  compareScores() {
    let playerScore = convertFaceToNumbers(this.props.cards.player.card);
    let cpuScore = convertFaceToNumbers(this.props.cards.cpu.card);
    console.log(`awardPoint returned:${this.awardPoint(playerScore, cpuScore)}`)
  //  this.awardPoint(playerScore, cpuScore);
  }
  render() {
    this.compareScores();
    return (
      <div id='currentRound'>
        { this.props.cards.player.card && <h1>{ this.props.cards.player.card } VS. { this.props.cards.cpu.card }</h1> }
      </div>
    )
  }
}

export default CurrentRound;
