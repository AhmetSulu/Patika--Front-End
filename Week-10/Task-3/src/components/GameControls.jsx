import React from 'react'

export class GameControls extends React.Component {
  render() {
    return (
      <div className="controls">
        <button onClick={() => window.location.reload()}>Yeniden Başlat</button>
      </div>
    )
  }
}