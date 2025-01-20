import React from 'react';
import { Card } from './Card';
import { ScoreBoard } from './ScoreBoard';
import confetti from 'canvas-confetti';

export class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    
    const frameworks = ['angular2','vue','react','grunt','phantomjs','ember','babel','ionic','gulp','meteor','yeoman','yarn','nodejs','bower','browserify'];
    const duplicatedFrameworks = [...frameworks, ...frameworks];
    const randomizedFrameworks = this.shuffle(duplicatedFrameworks);
    
    this.state = {
      frameworks,
      finalizedFrameworks: randomizedFrameworks.map(name => ({
        name,
        close: true,
        complete: false
      })),
      openedFrameworks: [],
      moves: 0,
      matches: 0,
      gameComplete: false
    };
  }

  triggerConfetti() {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1500
    };

    const fire = (particleRatio, opts) => {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    };

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }

  handleClick(name, index) {
    if(this.state.openedFrameworks.length === 2) return;
    
    const framework = { name, index };
    const finalizedFrameworks = [...this.state.finalizedFrameworks];
    const frameworks = [...this.state.openedFrameworks];
    
    if (frameworks.find(f => f.index === index) || finalizedFrameworks[index].complete) return;
    
    finalizedFrameworks[index].close = false;
    frameworks.push(framework);
    
    this.setState(prevState => ({
      openedFrameworks: frameworks,
      finalizedFrameworks,
      moves: prevState.moves + 1
    }));
    
    if(frameworks.length === 2) {
      setTimeout(() => this.checkMatch(), 750);
    }
  }

  checkMatch() {
    const finalizedFrameworks = [...this.state.finalizedFrameworks];
    const [first, second] = this.state.openedFrameworks;
    
    if(first.name === second.name && first.index !== second.index) {
      finalizedFrameworks[first.index].complete = true;
      finalizedFrameworks[second.index].complete = true;
      
      this.triggerConfetti();
      
      const totalMatches = this.state.matches + 1;
      if(totalMatches === this.state.frameworks.length) {
        setTimeout(() => {
          this.setState({ gameComplete: true });
          this.triggerConfetti();
        }, 300);
      }
      
      this.setState(prevState => ({
        matches: prevState.matches + 1
      }));
    } else {
      finalizedFrameworks[first.index].close = true;
      finalizedFrameworks[second.index].close = true;
    }
    
    this.setState({
      finalizedFrameworks,
      openedFrameworks: []
    });
  }

  shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  render() {
    return (
      <div>
        <ScoreBoard moves={this.state.moves} matches={this.state.matches} />
        <div className="playground">
          {this.state.finalizedFrameworks.map((framework, index) => (
            <Card 
              key={index}
              framework={framework.name} 
              click={() => this.handleClick(framework.name, index)} 
              close={framework.close} 
              complete={framework.complete}
            />
          ))}
        </div>
        {this.state.gameComplete && (
          <div className="victory-message">
            Tebrikler! Oyunu {this.state.moves} hamlede tamamladınız!
          </div>
        )}
      </div>
    );
  }
}