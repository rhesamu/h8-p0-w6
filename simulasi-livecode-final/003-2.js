/**
===============
NON PALINDROME
===============

Problem
--------
nonPalindrome adalah sebuah function yang akan menerima satu parameter bertipe string.
Function ini akan mengembalikan array satu dimensi yang berisikan kumpulan kata yang tidak palindrome.

Contoh 1:
input: 'Wow mereka janji bertemu di makam'
output: ['mereka', 'janji', 'bertemu', 'di']

Contoh 2:
input: 'Katak naik honda civic pada malam hari di mimpi Dimitri'
output: ['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']


RULES:
- Tidak boleh menggunakan .reverse(), .join()

**/

// function isPalindrome(str) {
//   var len = Math.floor(str.length/2);
//   str = str.toLowerCase();
//
//   for (var i = 0; i < len; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

function nonPalindrome(sentence) {
  // your code here
  var str = sentence.split(' ');
  var notPalindrome = [];

  for (var i = 0; i < str.length; i++) {
    var isPalindrome = true;
    var len = Math.floor(str[i].length / 2);


    for (var j = 0; j < len; j++) {
      if (str[i][j].toLowerCase() !== str[i][str[i].length - 1 - j].toLowerCase()) {
        isPalindrome = false;
        break;
      }
    }
    if (isPalindrome === false) {
      notPalindrome.push(str[i]);
    }
  }
  return notPalindrome;
}

console.log(nonPalindrome('Wow mereka janji bertemu di makam'));
//['mereka', 'janji', 'bertemu', 'di']

console.log(nonPalindrome('Katak naik honda civic pada malam hari di mimpi Dimitri'));
//['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']

console.log(nonPalindrome('kasurrusak kalo dipisah menjadi kasur rusak'));
//['kalo', 'dipisah', 'menjadi', 'kasur', 'rusak']
