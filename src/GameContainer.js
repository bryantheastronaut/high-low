import React, { Component } from 'react';
import { convertFaceToNumbers } from './convertFaceToNumbers';
import Title from './Title';
import CurrentRound from './CurrentRound';
import HigherLower from './HigherLower';
import Scores from './Scores';
import PlayerHand from './PlayerHand';
import OpponentHand from './OpponentHand';
import DECK from '../deckOfCards';
import './css/GameContainer.css';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerHand: [],
      cpuHand: [],
      score: { player: 0, cpu: 0 },
      currentRound: { player: {}, cpu: {} }
    }
    this.drawCards = this.drawCards.bind(this);
    this.playCard = this.playCard.bind(this);
    this.compareScores = this.compareScores.bind(this);
    this.awardPoint = this.awardPoint.bind(this);
  }
  //start game
  drawCards() {
    let roundDeck = DECK;
    let player = [];
    let cpu = [];
    for (let i=0; i<5; i++) {
      let cardIndex = Math.floor(Math.random() * roundDeck.length);
      player.push(roundDeck[cardIndex]);
      roundDeck = roundDeck.slice(0, cardIndex).concat(roundDeck.slice(cardIndex + 1));
    }
    for (let i=0;i < 5; i++) {
      let cardIndex = Math.floor(Math.random() * roundDeck.length);
      cpu.push(roundDeck[cardIndex]);
      roundDeck = roundDeck.slice(0, cardIndex).concat(roundDeck.slice(cardIndex + 1));
    };
    this.setState({ playerHand: player, cpuHand: cpu });
  }
  playCard(card) {
    this.setState({ currentRound: { player: {}, cpu: {} } });
    let cpuCard = this.state.cpuHand[0];
    this.setState({
      currentRound: { player: card, cpu: cpuCard }
    });
    this.awardPoint(this.compareScores(card, cpuCard));
    let newCpuHand = this.state.cpuHand.slice(1);
    let cardIndex = this.state.playerHand.indexOf(card);
    let newPlayerHand = this.state.playerHand.slice(0,cardIndex).concat(this.state.playerHand.slice(cardIndex+1));
    this.setState({ playerHand: newPlayerHand, cpuHand: newCpuHand});
  }
  compareScores(playerCard, cpuCard) {
    console.log(`player card: ${playerCard}, cpu card: ${cpuCard} in compoareScores`);
    if (playerCard.card === cpuCard.card) return 'tie';
    if (playerCard.card < cpuCard.card) return 'cpu';
    if (playerCard.card > cpuCard.card) return 'player';
  }
  awardPoint(winner) {
    console.log(`winner is ${winner} in awardPoint`);
    if (winner == 'cpu') {
      this.setState({ score:
        { player: this.state.score.player,
        cpu: this.state.score.cpu + 1 }
      });
    } else if (winner == 'player') {
      this.setState({ score:
        { player: this.state.score.player + 1,
        cpu: this.state.score.cpu }
      });
    } else {
      console.log('tied');
    }
  }
  render() {
    console.log(this.state.score);
    return (
      <div className="App">
        <Title />
        <CurrentRound
          cards={ this.state.currentRound } />
        <HigherLower />
        <PlayerHand
          hand={ this.state.playerHand }
          score={ this.state.score.player }
          onPlayCard={ this.playCard } />
        <OpponentHand
          hand={ this.state.cpuHand }
          score={ this.state.score.cpu } />
        <div className='clear' />
        <button onClick={ this.drawCards }>draw</button>
      </div>
    );
  }
}

export default GameContainer;
