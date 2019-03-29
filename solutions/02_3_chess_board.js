const drawChessBoard = (height = 8, width = 4, symbol = '#') => {

    let lineBeforeSpace = '';
    let lineAfterSpace = '';

    for (let i = 0; width > i; i++) {
        lineBeforeSpace += ' ' + symbol;
        lineAfterSpace += symbol + ' ';
    }

    let board = '';

    for (let i = 0; height > i; i++) {
        if (i % 2 === 0) {
            board += `${lineBeforeSpace} \n`;
        } else {
            board += `${lineAfterSpace} \n`;
        }
    }

    return board;

};

console.log(drawChessBoard(5, 5, '+'));

// original solutions
/*
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
 */