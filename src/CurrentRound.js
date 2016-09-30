import React, { Component } from 'react';
import { decodeHTML } from './decodeHTML';
import './css/currentRound.css';

class CurrentRound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let playerCard = <span className={`item1 singleCard ${ this.props.cards.player.color}`}>
      <p>{ this.props.cards.player.card }</p>
      <h4>{ decodeHTML(this.props.cards.player.suit) }</h4>
    </span>;
    let cpuCard = <span className={`item3 singleCard ${ this.props.cards.cpu.color}`}>
      <p>{ this.props.cards.cpu.card }</p>
      <h4> {decodeHTML(this.props.cards.cpu.suit) }</h4>
    </span>;
    return (
      <div id='currentRound'>
        { this.props.cards.player.card && (<div id='flex'>{ playerCard }  <h1 id='vs'>VS.</h1> { cpuCard }</div>) }
      </div>
    )
  }
}

export default CurrentRound;
