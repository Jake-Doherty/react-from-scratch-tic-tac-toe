// import { useContext } from 'react';
// import { GameContext } from '../context/GameContext.js';

// export function useCheckResults() {
//   const { board } = useContext(GameContext);

//   const checkWinner = () => {
//     if (board[0] === board[1] && board[0] === board[2] && board[0] !== '') return board[0];
//     if (board[3] === board[4] && board[3] === board[5] && board[3] !== '') return board[3];
//     if (board[6] === board[7] && board[6] === board[8] && board[6] !== '') return board[6];
//     if (board[0] === board[3] && board[0] === board[6] && board[0] !== '') return board[0];
//     if (board[1] === board[4] && board[1] === board[7] && board[1] !== '') return board[1];
//     if (board[2] === board[5] && board[2] === board[8] && board[2] !== '') return board[2];
//     if (board[0] === board[4] && board[0] === board[8] && board[0] !== '') return board[0];
//     if (board[2] === board[4] && board[2] === board[6] && board[2] !== '') return board[2];
//   };

//   const isTie = () => {
//     if (board.every((box) => box !== '')) return true;
//   };

//   return { checkWinner, isTie };
// }
