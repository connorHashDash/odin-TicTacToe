const log = console.log;
// Variable Declarations
let boardDiv = document.getElementById('gameBoard');
//The Game board is stored in this array
let token = 'x';
let cellArray = [];

let playerFactory = () => {
  let score = 0
  let name 
  return {name, score}
}

let game = (function()  {
  
  let reset = () => {
    playerFactory.score++
    boardDiv.innerHTML=''
    cellMaker.createLoop()
  }

  let win = (checker) => {
    if(token == 'x'){
    alert(`x wins`)
    }
   if(token == 'o'){
    alert('o wins!')
   }
    reset()
  }

  let winChecker = () => {
    if (cellArray[0].cellToken !== undefined){
      if(cellArray[0].cellToken == cellArray[1].cellToken && 
        cellArray[1].cellToken == cellArray[2].cellToken){
        win('1')
      }
    }
    if (cellArray[3].cellToken !== undefined){
      if(cellArray[3].cellToken == cellArray[4].cellToken && 
        cellArray[4].cellToken == cellArray[5].cellToken){
        win('2')
      }
    }
    if (cellArray[6].cellToken !== undefined){
      if(cellArray[6].cellToken == cellArray[7].cellToken && 
        cellArray[7].cellToken == cellArray[8].cellToken){
        win('3')
      }
    }
    if (cellArray[0].cellToken !== undefined){
      if(cellArray[0].cellToken == cellArray[3].cellToken && 
        cellArray[3].cellToken == cellArray[6].cellToken){
        win('4')
      }
    }
    if (cellArray[1].cellToken !== undefined){
      if(cellArray[1].cellToken == cellArray[4].cellToken && 
        cellArray[4].cellToken == cellArray[7].cellToken){
        win('5')
      }
    }
    if (cellArray[2].cellToken !== undefined){
      if(cellArray[2].cellToken == cellArray[5].cellToken && 
        cellArray[5].cellToken == cellArray[8].cellToken){
        win('6')
      }
    }
    if (cellArray[0].cellToken !== undefined){
      if(cellArray[0].cellToken == cellArray[4].cellToken && 
        cellArray[4].cellToken == cellArray[8].cellToken){
        win('7')
      }
    }
    if (cellArray[2].cellToken !== undefined){
      if(cellArray[2].cellToken == cellArray[4].cellToken && 
        cellArray[4].cellToken == cellArray[6].cellToken){
        win('8')
      }
    }
  }

  const cellMaker = (function(row, col) {
  let cellFactory = (row, col) => {
    let cell = document.createElement('div');
    let played = false;
    let cellToken

    const create = (row, col) => {
      cell.className = `${row}${col} cell`;
      cell.id = 'cell'
      boardDiv.appendChild(cell);
      cell.addEventListener('click', function() {play()} ) //Call a click function like this
      return {row, col}
    }

    const play = function() { 
      if (played == false) {
        let cross = document.createElement('p');
        cross.innerHTML=`${token}`;
        cross.className ='contents';
        cell.appendChild(cross);
        played = true;
        cellToken = token;
        winChecker()
        if (token == 'x'){token = 'o'; return;}
        else {token = 'x'}
      };
    };

    return {row, col, create, get cellToken() {return cellToken}}
  }

  let j = 0
    let createLoop = () => {
  for (let i = 0; i < 9; i++) { //This creates the gameboard and assigns the cells names
    if (j > 2) {j = 0}
    if (i < 3) {
      cellArray[i] = cellFactory('a', j) // Put variables in on creation
      cellArray[i].create('a', j)
    } else if (i < 6) {
      cellArray[i] = cellFactory('b', j)
      cellArray[i].create('b', j)
    } else {
      cellArray[i] = cellFactory('c', j)
      cellArray[i].create('c', j)
    }
    j++ 
  }
    }; createLoop()

  return {createLoop}
  })()
})()
