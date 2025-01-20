import React from 'react'
import { GameBoard } from './GameBoard'
import { GameControls } from './GameControls'

export class MemoryGame extends React.Component {
  render() {
    return (
      <div className="memory-game">
        <h1>Hafıza Oyunu</h1>
        <GameBoard />
        <GameControls />
      </div>
    )
  }
}