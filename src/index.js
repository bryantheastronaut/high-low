import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './GameContainer';
import DECK from '../deckOfCards';
import './css/index.css';

ReactDOM.render(
  <GameContainer cards={ DECK }/>,
  document.getElementById('root')
);
