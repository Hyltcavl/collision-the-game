import { useState } from 'react';
import './App.css'
let gameBoard = [
  ["x","x","x","x","x","x","x","x","x","x","x"],
  ["x","x","x","x","x","x","x","x","x","x","x"],
  ["x","x","x","x","x","x","x","x","x","x","x"],
  ["x","x","x","x","x","x","x","x","x","x","x"],
  ["x","x","x","x","x","x","x","x","x","x","x"],
  ["x","x","x","x","x","x","x","x","x","x","x"],
  ["x","x","x","x","x","x","x","x","x","x","x"],
  ["x","x","x","x","x","x","x","x","x","x","x"],
  ["x","x","x","x","x","x","x","x","x","x","x"],
  ["x","x","x","x","x","x","x","x","x","x","x"],
  ["x","x","x","x","x","x","x","x","x","x","x"]]

function App() {  

const [gameGrid, setGameBoard] = useState(gameBoard)
const [playerHelper, setHelpers] = useState()

let ModifyContentInPosition = (x,y,value)=> { 
  let temp = [...gameBoard]
  temp[x][y] = value
  setGameBoard(temp)
}

let GenerateGameBoard = ()=> {
  ModifyContentInPosition(0,0,"ll")
  ModifyContentInPosition(10,10,"dl")
  setHelpers([4,4])
  console.log(gameGrid)
}
  return (
    <div className="App">
      <h1>klik hear to kräsh gem</h1>
      <button onClick={GenerateGameBoard}>hear</button>
      <div className="game-grid">
        <table className = "grid-table">{gameGrid.map(row => <tr>{row.map(square => <td>{square} {}</td>)}</tr>)}</table>
      </div>
    </div>
  );
}

export default App