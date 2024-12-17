import { useState, useEffect } from "react";

function App() {
  function Header() {
    return <h1 className="header">Tic-Tac-Toe GAMES</h1>;
  }

  function Kotak({ value, onSquareClick }) {
    return (
      <button className="kotak" onClick={onSquareClick}>
        {value}
      </button>
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

  function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [kotaks, setKotaks] = useState(Array(9).fill(null));
    const [xWins, setXWins] = useState(0); 
    const [oWins, setOWins] = useState(0); 
    const [winner, setWinner] = useState(null);

    useEffect(() => {
      const newWinner = calculateWinner(kotaks);
      if (newWinner) {
        setWinner(newWinner);
        if (newWinner === "X") {
          setXWins((prevXWins) => prevXWins + 1);
        } else if (newWinner === "O") {
          setOWins((prevOWins) => prevOWins + 1);
        }
      }
    }, [kotaks]);

    let status;
    if (winner) {
      status = "Pemenang: " + winner;
    } else {
      status = "Pemain selanjutnya: " + (xIsNext ? "X" : "O");
    }

    function handleClick(i) {
      if (kotaks[i] || winner) {
        return;
      }
      const nextKotak = kotaks.slice();
      nextKotak[i] = xIsNext ? "X" : "O";
      setKotaks(nextKotak);
      setXIsNext(!xIsNext);
    }

    function resetGame() {
      setKotaks(Array(9).fill(null));
      setXIsNext(true);
      setWinner(null); 
    }

    return (
      <>
        <div className="status">{status}</div>
        <div className="row-Board">
          <Kotak value={kotaks[0]} onSquareClick={() => handleClick(0)} />
          <Kotak value={kotaks[1]} onSquareClick={() => handleClick(1)} />
          <Kotak value={kotaks[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="row-Board">
          <Kotak value={kotaks[3]} onSquareClick={() => handleClick(3)} />
          <Kotak value={kotaks[4]} onSquareClick={() => handleClick(4)} />
          <Kotak value={kotaks[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="row-Board">
          <Kotak value={kotaks[6]} onSquareClick={() => handleClick(6)} />
          <Kotak value={kotaks[7]} onSquareClick={() => handleClick(7)} />
          <Kotak value={kotaks[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <div className="row-Board">
          <button className="reset-button" onClick={resetGame}>
            Main Lagi
          </button>
        </div>
        <div className="scoreboard">
          <h3>Skor</h3>
          <p>X Menang: {xWins}</p>
          <p>O Menang: {oWins}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <Board />
    </>
  );
}

export default App;
