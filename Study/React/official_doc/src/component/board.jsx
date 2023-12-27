import { useState } from "react";
import Square from "./component/square";


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = [...squares];

    nextSquares[i] = xIsNext ? "X" : "O";
    // 위: 삼항연산자를 활용  
    //if 문 활용 : if (xIsNext) {nextSquares[i] = "X";}  else {nextSquares[i] = "O";}
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }


  function calculateWinner(squares) {
    // 가능한 모든 승리 조합을 나타내는 배열
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    // 가능한 승리 조합을 반복하며 승자 확인
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      
      // 현재 조합의 첫 번째 요소에 값이 있으며, 해당 값이 세 요소 모두 동일하다면 승자 반환
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // 승자 반환
      }
    }
  
    // 모든 승리 조합을 확인한 후에도 승자가 없으면 null 반환
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
     <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}