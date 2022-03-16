const log = console.log
// Variable Declarations
let boardDiv = document.getElementById('gameBoard')

let cellStates = () => {
  const neutral = () => {log('works')};
  const player = () => {};
  const comp = () => {};
  return {neutral, player, comp}
}


let gameBoard = (() => {
  let cellArray = []

  const cellMaker = ((row) => {
    let j = 0
      let counter = (row) => {
        if (j > 2) {j = 0} 
          let cell = document.createElement('div');
          cell.className = `${row}${j} cell`;
          boardDiv.appendChild(cell);
          j++
      }
    return {counter}
  })()

  for (let i = 0; i < 9; i++) {
    if (i < 3) {
      cellMaker.counter('a')
    } else if (i < 6) {
      cellMaker.counter('b')
    } else {
      cellMaker.counter('c')
    }
  }
})()

  
