
/**
Mini Sudoku Board
=================
Implementasikan function `miniSudokuBoard` untuk membuat
papan 3x3 yang tipe data-nya berupa Array.
`miniSudokuBoard` akan menerima satu parameter yaitu `text`
yang tipe data-nya berupa String.

# Contoh I/O
- Input: '290500007'
  Output: [ ['2', '9', '0'], ['5', '0', '0'], ['0', '0', '7] ]

- Input: '302609005'
  Output: [ ['3', '0', '2'], ['6', '0', '9'], ['0', '0', '5'] ]

# Kondisi khusus
- Jika parameter adalah string kosong, kembalikan nilai 'Empty board'
- Jika panjang dari string tidak sama dengan 9, kembalikan nilai 'Invalid input'

*/

function miniSudokuBoard (text) {
  // Code here
  if (text.length === 0) {
    return "Empty board"
  }
  if (text.length !== 9) {
    return "Invalid input"
  }

  var array = text.split('');
  var firstSet = [];
  var secondSet = [];
  var thirdSet = [];

  for (var i = 0; i < 3; i++) {
    firstSet.push(array[i]);
  }
  for (var i = 3; i < 6; i++) {
    secondSet.push(array[i]);
  }
  for (var i = 6; i < array.length; i++) {
    thirdSet.push(array[i]);
  }

  var sudoku = [];
  sudoku.push(firstSet);
  sudoku.push(secondSet);
  sudoku.push(thirdSet);

  return sudoku;
}

console.log(miniSudokuBoard('005030081'));
// /[ [ '0', '0', '5' ], [ '0', '3', '0' ], [ '0', '8', '1' ] ]
console.log(miniSudokuBoard('105802000'));
// [ [ '1', '0', '5' ], [ '8', '0', '2' ], [ '0', '0', '0' ] ]
console.log(miniSudokuBoard('608730000'));
// [ [ '6', '0', '8' ], [ '7', '3', '0' ], [ '0', '0', '0' ] ]
console.log(miniSudokuBoard('096040001'));
// [ [ '0', '9', '6' ], [ '0', '4', '0' ], [ '0', '0', '1' ] ]
console.log(miniSudokuBoard('87109'));
// Invalid input
console.log(miniSudokuBoard(''));
// Empty board
