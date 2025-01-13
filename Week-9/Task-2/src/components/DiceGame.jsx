import React, { useState } from 'react';

const DiceGame = () => {
  const [playerName, setPlayerName] = useState('Player 1');
  const [isEditing, setIsEditing] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [playerDice, setPlayerDice] = useState(4);
  const [computerDice, setComputerDice] = useState(4);
  const [result, setResult] = useState('');

  const rollDice = () => {
    setIsRolling(true);
    setResult('');

    const animationInterval = setInterval(() => {
      setPlayerDice(Math.floor(Math.random() * 6) + 1);
      setComputerDice(Math.floor(Math.random() * 6) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(animationInterval);
      const finalPlayerRoll = Math.floor(Math.random() * 6) + 1;
      const finalComputerRoll = Math.floor(Math.random() * 6) + 1;
      
      setPlayerDice(finalPlayerRoll);
      setComputerDice(finalComputerRoll);
      
      if (finalPlayerRoll > finalComputerRoll) {
        setResult(`${playerName} Kazandı!`);
      } else if (finalPlayerRoll < finalComputerRoll) {
        setResult('PC Kazandı!');
      } else {
        setResult('Berabere!');
      }
      
      setIsRolling(false);
    }, 3000);
  };

  const renderDiceDots = (value) => {
    const dots = Array(value).fill('●').join(' ');
    return dots;
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <div className="mb-16 flex items-center gap-2">
        <h1 className="text-4xl font-bold text-cream-100">Draw!</h1>
        <span className="text-4xl">🤝</span>
      </div>

      {/* Players and Dice */}
      <div className="flex flex-col items-center w-full max-w-2xl">
        <div className="w-full flex justify-between mb-8">
          <div className="text-xl text-emerald-400">
            {isEditing ? (
              <form onSubmit={handleNameSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="bg-gray-700 text-emerald-400 px-2 py-1 rounded outline-none border border-emerald-400"
                  autoFocus
                />
                <button
                  type="submit"
                  className="text-sm bg-emerald-400 text-gray-800 px-2 py-1 rounded hover:bg-emerald-500"
                >
                  ✓
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2">
                <span>{playerName}</span>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-sm text-emerald-400 hover:text-emerald-300"
                >
                  ✎
                </button>
              </div>
            )}
          </div>
          <span className="text-xl text-emerald-400">PC</span>
        </div>

        <div className="w-full flex justify-between mb-12">
          <div className={`w-32 h-32 bg-red-800 rounded-lg flex items-center justify-center text-white text-5xl transform transition-all duration-300 ${isRolling ? 'rotate-12' : ''}`}>
            {renderDiceDots(playerDice)}
          </div>
          <div className={`w-32 h-32 bg-red-800 rounded-lg flex items-center justify-center text-white text-5xl transform transition-all duration-300 ${isRolling ? '-rotate-12' : ''}`}>
            {renderDiceDots(computerDice)}
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className="mb-8 text-2xl font-bold text-emerald-400">
            {result}
          </div>
        )}

        {/* Roll Button */}
        <button 
          onClick={rollDice}
          disabled={isRolling}
          className={`w-full ${isRolling ? 'bg-gray-600' : 'bg-emerald-400 hover:bg-emerald-500'} text-gray-800 font-bold py-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2`}
        >
          {isRolling ? (
            <span className="text-xl">Zar Atılıyor...</span>
          ) : (
            <span className="text-2xl">🎲</span>
          )}
        </button>
      </div>

      {/* Footer */}
      <div className="mt-16 flex items-center gap-2 text-gray-400">
        www 
        <span className="text-lg">🎲</span> 
        Dice Game 
        <span className="text-lg">🎲</span> 
        com
      </div>
    </div>
  );
};

export default DiceGame;