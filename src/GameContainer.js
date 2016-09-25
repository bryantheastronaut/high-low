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
      currentRound: { player: '', cpu: '' }
    }
    this.drawCards = this.drawCards.bind(this);
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
    console.log(player);
    this.setState({ playerHand: player, cpuHand: cpu });
  }
  playCard(card) {
    //this.setState({
    //  currentRound: { player: card }
    //});
  }
  render() {
    return (
      <div className="App">
        <Title />
        <CurrentRound />
        <HigherLower />
        <PlayerHand
          hand={ this.state.playerHand }
          score={ this.state.score.player } />
        <OpponentHand
          hand={ ['2','6','10', 'K', '4'] }
          score={ this.state.score.cpu } />
        <div className='clear' />
        <button onClick={ this.drawCards }>draw</button>
      </div>
    );
  }
}

export default GameContainer;
