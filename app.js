const log = console.log;
// Variable Declarations
let boardDiv = document.getElementById('gameBoard');
//The Game board is stored in this array let token = 'x'; let cellArray = [];
let cellArray = [];

let token = 'x'

let playerFactory = (name) => {
  let score = 0
  return {name, score}
}

let game = (function() {

  let player = []
  const openFormButton = document.querySelectorAll('[data-modal-target]')
  const closeFormButton = document.querySelectorAll('[data-close-button]')
  const form1 = document.getElementById('2player')
  const form2 = document.getElementById('vsComp')
  
  form1.addEventListener('submit', (e) => {
    e.preventDefault()
    player[0] = playerFactory(document.getElementById('player1Input').value)
    player[1] = playerFactory(document.getElementById('player2Input').value)
    let test = document.getElementById('modalForm')
    test.classList.remove('active')
    scoreUpdater()
  })

  let scoreUpdater = () => {
    let p1Score = document.getElementById('score1')
    let p2Score = document.getElementById('score2')
    p1Score.innerHTML=`${player[0].name}: ${player[0].score}`
    p2Score.innerHTML=`${player[1].name}: ${player[1].score}`
  }

  form2.addEventListener('submit', (e) => {
    e.preventDefault()
  })

  let reset = () => {
    boardDiv.innerHTML=''
    cellArray = []
    token = 'x';
    cellMaker.createLoop()
  }
  
  let newGame = (() => {
    let newGame = document.getElementById('newGameButton')
      newGame.addEventListener('click', function() {
      boardDiv.innerHTML=''
      cellMaker.createLoop()
      let test = document.getElementById('modalForm')
        test.classList.add('active')
    })
  })()
  
  let win = (checker) => {
    let gameInfo = document.getElementById('gameInfo')
    if(checker == 'draw'){
      gameInfo.innerHTML=`Draw!`
    } else if(token == 'x'){
      player[0].score++
      gameInfo.innerHTML=`${player[0].name} wins!`
    } else if(token == 'o'){
      player[1].score++
      gameInfo.innerHTML=`${player[1].name} wins!`
    }
    scoreUpdater()
    reset()
    log(token)
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
        let gameInfo = document.getElementById('gameInfo')
        log(token)
        gameInfo.innerHTML=''
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
