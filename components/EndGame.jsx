import React from "react";

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="end-game-screen">
      {!draw && <span className="win-text">{player ? "O Ganó" : "X Ganó"}</span>}
      {draw && <span className="win-text">Empate</span>}

      <span className="win-history">
        Victorias X: {winCount.X}
        <br />
        Victorias O: {winCount.O}
      </span>

      <button className="btn" onClick={restartGame}>
        Reiniar Juego
      </button>
      <button className="btn" onClick={clearHistory}>
        Limpiar Historial
      </button>
    </div>
  );
}

export default EndGame;