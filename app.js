const log = console.log;
// Variable Declarations
let boardDiv = document.getElementById('gameBoard');
//The Game board is stored in this array
let cellArray = [];
    let token = 'x'
let game = (() => {
  const cellMaker = ((row) => {

  let cellFactory = (row, col) => {
    let cell = document.createElement('div');
    let played = false;
    const create = (row, col) => {
      cell.className = `${row}${col} cell`;
      boardDiv.appendChild(cell);
      cell.addEventListener('click', function() {play();}) // you need to call a click function like this
    }
    const play = () => { 
      if (played == false) {
        let cross = document.createElement('p');
        cross.innerHTML=`${token}`;
        cross.className ='contents';
        cell.appendChild(cross);
        played = true;
        if (token == 'x'){token = 'o'; return}
        else {token = 'x'}
      }
    };
    return {row, col, create}
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
