// Make an object constructor when the cells are being created.
// Program a computer and player controlled state of the cells which is triggered upon clicking
// The cell or the computer taking it.
const log = console.log;
// Variable Declarations
let boardDiv = document.getElementById('gameBoard');
//The Game board is stored in this array
let cellArray = [];
let game = (() => {
  const cellMaker = ((row) => {

  let cellFactory = (row, col) => {
    let nought = false
    let cross = true
    const create = (row, col) => {
      let cell = document.createElement('div');
      cell.className = `${row}${col} cell`;
      boardDiv.appendChild(cell);
    }
    const play = () => { 
      
    };

    return {row, col, create, play}
  }

    let j = 0
  for (let i = 0; i < 9; i++) { //This creates the gameboard and assigns the cells names
    if (j > 2) {j = 0}
    if (i < 3) {
      cellArray[i] = cellFactory()
      cellArray[i].create('a', j)
     j++ 
    } else if (i < 6) {
      cellArray[i] = cellFactory()
      cellArray[i].create('b', j)
     j++ 
    } else {
      cellArray[i] = cellFactory()
      cellArray[i].create('c', j)
     j++ 
    }
  }

  })()
})()
