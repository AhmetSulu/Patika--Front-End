import React from 'react'

export class Card extends React.Component {
  render() {
    const { framework, close, complete, click } = this.props;
    const className = `card${!close ? ' opened' : ''}${complete ? ' matched' : ''}`;
    
    return (
      <div className={className} onClick={() => click(framework)}>
        <div className="front">?</div>
        <div className="back">
          <img 
            src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${framework}.png`}
            alt={framework}
          />
        </div>
      </div>
    )
  }
}