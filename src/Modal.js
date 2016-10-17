import React, { Component } from 'react'

class Modal extends Component {
  closeModal(e) {
    e.preventDefault();
    this.props.onModalClose()
  }
  render() {
    if (!this.props.isModalOpen) return null
    return (
      <div>
        <div className='modal'>
          <h2>How To Play...</h2>
          <p>On new game, the player and the computer are each dealt a new hand. Player must choose card from hand to play. Highest card gets the point (Aces are highest).</p>
          <p>After first hand, indicator will appear to let you know if the computers next card is higher or lower than the last card it played. With this information, player should make an educated guess on which card to play next to earn the higest number of points.</p>
          <p>Coded with &lt;3 by Bryan</p>
        </div>
        <div className='backdrop' onClick={ e => { this.closeModal(e) }} />
      </div>
    )
  }
}

export default Modal;
