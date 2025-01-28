import { useEffect, useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  let status;

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return;
    const nextSquares = squares.slice();
    if (xIsNext) nextSquares[i] = "X";
    else nextSquares[i] = "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  if (winner) {
    status = "Ganador: " + winner;
  } else if (squares.every((square) => square !== null)) {
      status = "Empate"
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "0");
  }

  return (
    <div className="game-container">
       <h1 className="game-title">Tres en linea</h1>
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <div > 
      <button className="reset-button"
      onClick={() => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
      }}>
        Reiniciar Partida
      </button>
      </div>
  </div>
  );
  
}

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// export default function Wrapper() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <h1>Wrapper</h1>
//       <button onClick={handleClick}>Incrementar contador del padre</button>
//       <Counter counter={count}/>
//     </div>
//   );
// }

// function Counter({counter}) {
//   // const [count, setCount] = useState(0);
//   const [otherCounter, setOtherCounter] = useState(0);
//   const handleClick = () => {
//     setOtherCounter(otherCounter + 1);
//     console.log("otherCounter despues del set", otherCounter);
//   }
  
//   useEffect(() => {
//     console.log("otherCounter adentro del useEffect", otherCounter);
//     if (otherCounter === 10) console.log("felicidades")
//   }, [otherCounter])

//   // on init en angular, o window.onload en js
//   useEffect(() => {
//     console.log("Se monto el componente")
//   }, [])


//   return (
//     <div>
//       <button onClick={handleClick}>Incrementar contador local</button>
//       <p>Contador del padre pasado como prop: {counter}</p>
//       <p>Contador local con const: {otherCounter}</p>
//       {/* <button onClick={() => setCount(count + 1)}>Incrementar</button> */}
//     </div>
//   );
// }
