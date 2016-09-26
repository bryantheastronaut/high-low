import React from 'react';
import Scores from './Scores';
import './css/hand.css';

function decodeHTML(input) {
  let txt = document.createElement('textarea');
  txt.innerHTML = input;
  return txt.value;
}

const Hand = (props) => {
  let cards = props.hand.map((card, i) => {
    return (
      <li key={ i } onClick={ ()=> props.onPlayCard(card) } className={`singleCard ${card.color}`}>
        { card.card }
        <h3>{ decodeHTML(card.suit) }</h3>
      </li>
    )
  })
  return (
    <div id='playerScreen'>
      <Scores isPlayer={ true } score={ props.score } />
      <ul className='hand' id='playerHand'>
        { cards }
      </ul>
    </div>
  )
}

export default Hand;
