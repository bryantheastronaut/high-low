import React from 'react';
import './css/misc.css';

const Title = (props) => {
  return (
    <div id='title'>
      <h1>High / Low</h1>
      <h1><i className='fa fa-heart-o'></i></h1>
      <div className='buttonsContainer'>
        <button className='right buttons newGame' onClick={ props.onNewGame }>New Game</button>
        <button className='right buttons draw' onClick={ props.onDrawCards }>Draw!</button>

      </div>
    </div>
  )
}

export default Title;
