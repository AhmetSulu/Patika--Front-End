import React from 'react'

export class ScoreBoard extends React.Component {
  render() {
    return (
      <div className="score-board">
        <h2>Skor Tablosu</h2>
        <div className="score-info">
          <div className="score-item">
            <span>Hamle Sayısı:</span>
            <span>{this.props.moves}</span>
          </div>
          <div className="score-item">
            <span>Eşleşmeler:</span>
            <span>{this.props.matches}</span>
          </div>
        </div>
      </div>
    )
  }
}