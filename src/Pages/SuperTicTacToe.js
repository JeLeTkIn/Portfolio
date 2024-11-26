import React, { useState, useEffect } from 'react';

const initialBoard = Array(9).fill(null).map(() => Array(9).fill(null));
const initialStatus = Array(9).fill(null); // Для отслеживания побед в больших клетках

function SuperTicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [nextMove, setNextMove] = useState(null); // Следующая под-сетка для хода противника
  const [status, setStatus] = useState(initialStatus); // Состояние клеток большой сетки
  const [gameOver, setGameOver] = useState(false); // Состояние завершения игры

  useEffect(() => {
    // Если следующая мини-сетка заблокирована, игрок может выбрать любую доступную сетку
    if (nextMove !== null && status[nextMove] !== null) {
      // Если подсетка заблокирована, выбираем любую незаблокированную
      const availableMoves = status.map((s, idx) => (s === null ? idx : null)).filter((idx) => idx !== null);
      setNextMove(availableMoves.length > 0 ? availableMoves[0] : null); // Выбираем первую доступную под-сетку
    }
  }, [nextMove, status]);

  const checkWinner = (subBoard) => {
    // Проверяем победителя на под-сетке
    for (let i = 0; i < 3; i++) {
      // Проверка строк
      if (subBoard[i * 3] && subBoard[i * 3] === subBoard[i * 3 + 1] && subBoard[i * 3] === subBoard[i * 3 + 2]) {
        return subBoard[i * 3];
      }
      // Проверка столбцов
      if (subBoard[i] && subBoard[i] === subBoard[i + 3] && subBoard[i] === subBoard[i + 6]) {
        return subBoard[i];
      }
    }
    // Проверка диагоналей
    if (subBoard[0] && subBoard[0] === subBoard[4] && subBoard[0] === subBoard[8]) {
      return subBoard[0];
    }
    if (subBoard[2] && subBoard[2] === subBoard[4] && subBoard[2] === subBoard[6]) {
      return subBoard[2];
    }
    return null;
  };

  const checkGameOver = () => {
    // Проверяем победу на большой сетке
    for (let i = 0; i < 3; i++) {
      // Проверка строк
      if (status[i * 3] && status[i * 3] === status[i * 3 + 1] && status[i * 3] === status[i * 3 + 2]) {
        return status[i * 3]; // Возвращаем победителя (X или O)
      }
      // Проверка столбцов
      if (status[i] && status[i] === status[i + 3] && status[i] === status[i + 6]) {
        return status[i]; // Возвращаем победителя (X или O)
      }
    }
    // Проверка диагоналей
    if (status[0] && status[0] === status[4] && status[0] === status[8]) {
      return status[0]; // Возвращаем победителя (X или O)
    }
    if (status[2] && status[2] === status[4] && status[2] === status[6]) {
      return status[2]; // Возвращаем победителя (X или O)
    }
    return null;
  };

  const handleCellClick = (index, subIndex) => {
    // Если игра завершена, не разрешаем делать ход
    if (gameOver || board[index][subIndex] || (nextMove !== null && nextMove !== index) || status[index] !== null) return;

    const newBoard = [...board];
    newBoard[index][subIndex] = currentPlayer;
    setBoard(newBoard);

    // Проверяем победу на под-сетке
    const winner = checkWinner(newBoard[index]);
    if (winner) {
      const newStatus = [...status];
      newStatus[index] = winner; // Помечаем победителя в клетке большой сетки
      setStatus(newStatus);
    }

    // Определяем следующую под-сетку для хода противника
    setNextMove(subIndex === 8 ? null : subIndex);

    // Меняем игрока
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    
    // Проверка на завершение игры
    const gameWinner = checkGameOver();
    if (gameWinner) {
      setGameOver(true);
      alert(`${gameWinner} wins the game!`);
    }
  };

  const renderCell = (index, subIndex) => {
    return (
      <button
        key={subIndex}
        onClick={() => handleCellClick(index, subIndex)}
        className={`cell ${board[index][subIndex] ? board[index][subIndex] : ''} ${status[index] !== null ? 'disabled' : ''}`}
      >
        {board[index][subIndex]}
      </button>
    );
  };

  const renderBoard = () => {
    return board.map((subBoard, index) => (
      <div
        key={index}
        className={`sub-board ${nextMove === index && status[index] === null ? 'active' : ''} ${status[index] ? status[index] : ''}`}
      >
        {subBoard.map((_, subIndex) => renderCell(index, subIndex))}
      </div>
    ));
  };

  return (
    <div className="game-container">
      <h1 className="title">Super Tic-Tac-Toe</h1>
      <div className="board">
        {renderBoard()}
      </div>
      <div className="current-player">Current Player: {currentPlayer}</div>
    </div>
  );
}

export default SuperTicTacToe;
