const log = console.log
// Variable Declarations
let boardDiv = document.getElementById('gameBoard')

//The Game board is stored in this array
let cellArray = [];

let cellStates = () => {
  const neutral = () => {log('works')};
  const player = () => {};
  const comp = () => {};
  return {neutral, player, comp}
}


let gameBoard = (() => {

  const cellMaker = ((row) => {
    let j = 0;
    let h = 0;
      let counter = (row) => {
        if (j > 2) {j = 0} 
          let cell = document.createElement('div');
          cell.className = `${row}${j} cell`;
          cellArray[h] = `${row}${j}`;
          boardDiv.appendChild(cell);
          cell.addEventListener('click', function() {
            if(this.innerHTML == 'x'){
            log(`${row}${j}`)
            let cross = document.createElement('p');
            cross.className = `contents`;
            cross.innerHTML = `x`;
            cell.appendChild(cross);
            }
          });
        j++;
        h++;
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


let winChecker = () => {
  for(c = 0; c < cellArray.length; c++){
  }
}
