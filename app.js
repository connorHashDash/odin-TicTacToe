const log = console.log;
// Variable Declarations
let boardDiv = document.getElementById('gameBoard');
const openFormButton = document.querySelectorAll('[data-modal-target]')
const closeFormButton = document.querySelectorAll('[data-close-button]')
//The Game board is stored in this array let token = 'x'; let cellArray = [];
let playerArray = [];

let playerFactory = (name) => {
  let score = 0
  return {name, score}
}

let game = (function() {
  
  let reset = () => {
    playerFactory.score++
    boardDiv.innerHTML=''
    cellArray = []
    cellMaker.createLoop()
    token = 'x';
  }
  
  let newGame = (() => {
    let newGame = document.getElementById('newGameButton')
      newGame.addEventListener('click', function() {
      boardDiv.innerHTML=''
      cellMaker.createLoop()
    })
  })()
  
  let manualReset = (() => {
    let resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function() {reset()})
  })()

  openFormButton.forEach(button => {
      button.addEventListener('click', () => {
          const modal = document.querySelector(button.dataset.modalTarget)
          openModal(modal)
      })
  })

  function openModal(modal) {
      if (modal == null) return
      modal.classList.add('active')
  }


  let win = (checker) => {
    if(checker == 'draw'){
      alert('draw')
    } else if(token == 'x'){
      alert(`x wins`)
    } else if(token == 'o'){
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
    if (cellArray[0].cellToken !== undefined && 
      cellArray[1].cellToken !== undefined &&
      cellArray[2].cellToken !== undefined && 
      cellArray[3].cellToken !== undefined && 
      cellArray[4].cellToken !== undefined && 
      cellArray[5].cellToken !== undefined && 
      cellArray[6].cellToken !== undefined && 
      cellArray[7].cellToken !== undefined && 
      cellArray[8].cellToken !== undefined ){
      win('draw')
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
    };

  return {createLoop}
  })()
})()
