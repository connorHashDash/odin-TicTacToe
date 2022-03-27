const log = console.log;
// Variable Declarations
let boardDiv = document.getElementById('gameBoard');
//The Game board is stored in this array
let token = 'x';
let cellArray = [];
let game = (function()  {

  let winChecker = () => {
    for(i = 0; i < cellArray.length; i++){
      if (cellArray[0].cellToken !== undefined){
        if(cellArray[0].cellToken == cellArray[1].cellToken && 
          cellArray[1].cellToken == cellArray[2].cellToken){
          alert('win')
          return
        }
      }
      if (cellArray[3].cellToken !== undefined){
        if(cellArray[3].cellToken == cellArray[4].cellToken && 
          cellArray[4].cellToken == cellArray[5].cellToken){
          alert('win')
          return
        }
      }
      if (cellArray[6].cellToken !== undefined){
        if(cellArray[6].cellToken == cellArray[7].cellToken && 
          cellArray[7].cellToken == cellArray[8].cellToken){
          alert('win')
          return
        }
      }
      if (cellArray[0].cellToken !== undefined){
        if(cellArray[0].cellToken == cellArray[3].cellToken && 
          cellArray[3].cellToken == cellArray[6].cellToken){
          alert('win')
          return
        }
      }
      if (cellArray[1].cellToken !== undefined){
        if(cellArray[1].cellToken == cellArray[4].cellToken && 
          cellArray[4].cellToken == cellArray[7].cellToken){
          alert('win')
          return
        }
      }
      if (cellArray[2].cellToken !== undefined){
        if(cellArray[2].cellToken == cellArray[5].cellToken && 
          cellArray[5].cellToken == cellArray[8].cellToken){
          alert('win')
          return
        }
      }
      if (cellArray[0].cellToken !== undefined){
        if(cellArray[0].cellToken == cellArray[4].cellToken && 
          cellArray[4].cellToken == cellArray[8].cellToken){
          alert('win')
          return
        }
      }
      if (cellArray[2].cellToken !== undefined){
        if(cellArray[2].cellToken == cellArray[4].cellToken && 
          cellArray[4].cellToken == cellArray[6].cellToken){
          alert('win')
          return
        }
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

  })()
})()
