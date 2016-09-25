import React from 'react';

const Scores = (props) => {
  let player;
  { (props.isPlayer) ? player = 'You: ' : player = 'Opponent: ' };
  return (
    <h2>{ player + props.score }</h2>
  )
}

export default Scores;
