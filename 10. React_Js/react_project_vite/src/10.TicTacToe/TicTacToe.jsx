import React, { useState } from "react";
import Square from "./Square";

export default function TicTacToe() {
  const [ticToe, setTicToe] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  const tikToeHandler = (index) => {
    if (ticToe[index] === null ) {
      const copyTicToe = [...ticToe];
      copyTicToe[index] = turn ? "X" : "O";
      setTicToe(copyTicToe);
      setTurn(!turn);
    }
  };

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (ticToe[a] && ticToe[a] === ticToe[b] && ticToe[a] === ticToe[c]) {
        return ticToe[a];
      }
    }
    return null;
  };

  const winner = calculateWinner();

  const playAgain =()=>{
    setTicToe(Array(9).fill(null))
  }

  return (
    <div className="d-flex w-100 h-auto p-5 flex-column justify-content-center align-items-center">
        <h1>Tic Tac Toe Game</h1>
      <div className="m-auto w-100 d-flex justify-content-center align-items-center mt-5">
        <div>
          <Square onClick={() => tikToeHandler(0)} value={ticToe[0]} turn={turn}/>
          <Square onClick={() => tikToeHandler(1)} value={ticToe[1]} turn={turn}/>
          <Square onClick={() => tikToeHandler(2)} value={ticToe[2]} turn={turn}/>
        </div>
        <div>
          <Square onClick={() => tikToeHandler(3)} value={ticToe[3]} turn={turn}/>
          <Square onClick={() => tikToeHandler(4)} value={ticToe[4]} turn={turn}/>
          <Square onClick={() => tikToeHandler(5)} value={ticToe[5]} turn={turn}/>
        </div>
        <div>
          <Square onClick={() => tikToeHandler(6)} value={ticToe[6]} turn={turn}/>
          <Square onClick={() => tikToeHandler(7)} value={ticToe[7]} turn={turn}/>
          <Square onClick={() => tikToeHandler(8)} value={ticToe[8]} turn={turn}/>
        </div>
      </div>
      {winner && <div className="fs-3 fw-bold mt-4">Winner is : {winner}</div>}
      {winner && <button className="border border-primary bg-primary px-3 py-2 fs-5 rounded-pill text-light mt-5" onClick={()=>playAgain()}>Play Again</button>}
      </div>
  
  );
}
