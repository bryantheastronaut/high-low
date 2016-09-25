import React from 'react';
import Scores from './Scores';
import './css/hand.css';

const OpponentHand = (props) => {
  let cards = props.hand.map((card, i) => {
    return (
      <li key={ i } className='singleCard'>
        ?
      </li>
    )
  });
  return (
    <div id='opponentScreen'>
      <Scores isPlayer={ false } score={ props.score } />
      <ul className='hand' id='opponentHand'>
        { cards }
      </ul>
    </div>
  )
}

export default OpponentHand;
