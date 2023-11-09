import React from "react";

const ScoreBoard = ({
  scoreDisplay,
  timeLeft,
  gameResult,
  handlePlayAgainClick,
  gamesWon,
  gamesLost,
}) => {
  const gamesPlayed = gamesWon + gamesLost; // Calculate the total number of games played

  return (
    <div className="score-board">
      <div>Score: {scoreDisplay}</div>
      <div>Time left: {timeLeft}</div>
      <div>Games Won: {gamesWon}</div>
      <div>Games Lost: {gamesLost}</div>
      <div>Games Played: {gamesPlayed}</div>

      {timeLeft === 0 && (
        <div>
          {gameResult}
          <button className="start-game" onClick={handlePlayAgainClick}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
};

export default ScoreBoard;
