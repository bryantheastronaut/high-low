import React, { Component } from 'react';
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
  }
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
    }
    this.setState({ playerHand: player, cpuHand: cpu });
  }
  playCard(card) {
    let cpuCard = this.state.cpuHand[0];
    this.setState({
      currentRound: { player: card, cpu: cpuCard }
    });
    let newCpuHand = this.state.cpuHand.slice(1);
    let cardIndex = this.state.playerHand.indexOf(card);
    let newPlayerHand = this.state.playerHand.slice(0,cardIndex).concat(this.state.playerHand.slice(cardIndex+1));
    this.setState({ playerHand: newPlayerHand, cpuHand: newCpuHand});
  }
  render() {
    console.log(this.state.currentRound.player);
    console.log('is the players card and the cpu card is:');
    console.log(this.state.currentRound.cpu);
    return (
      <div className="App">
        <Title />
        <CurrentRound cards={ this.state.currentRound } />
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
