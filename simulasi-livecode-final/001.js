/**
Missing Numbers
-------------------
Implementasikan function `missingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: [1, 3, 5, 6, 7]
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: [4]
  - Input: [4, 2, 3, 1]
    Output: []

RULES:
--------
- WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
  - .max()
  - .min()
  - .sort()
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )

*/

/*
Algoritma:
1. Jika numbers.length = 0, return array kosong
2. Membuat array baru untuk menampung angka yang hilang
3. Sort numbers array menggunakan perulangan,
jika array index sesudah lebih kecil dari index sebelum, tukar nilainya
4. Membuat perulangan baru untuk mengetahui angka yang hilang,
jika selisih nilai array index sesudah dan sebelum tidak sama dengan 1,
push nilai-nilai yang hilang ke array baru.
5. Tampilkan isi array baru tsb.
*/

function missingNumbers (numbers) {
  // Code disini
  if (numbers.length === 0) {
    return [];
  }

  var missing = [];
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i+1; j < numbers.length; j++) {
      if (numbers[j] < numbers[i]) {
        var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }

  for (var i = 0; i < numbers.length - 1; i++) {
    if (numbers[i+1] - numbers[i] !== 1) {
      for (var j = (numbers[i] + 1); j < numbers[i+1]; j++) {
        missing.push(j);
      }
    }
  }
  return missing;
}

console.log(missingNumbers([1, 5, 10, 7, 6])); // [2, 3, 4, 8, 9]
console.log(missingNumbers([10, 1])); // [2, 3, 4, 5, 6, 7, 8, 9]
console.log(missingNumbers([90, 92, 91])); // []
console.log(missingNumbers([60, 54, 50])); // [51, 52, 53, 55, 56, 57, 58, 59]
console.log(missingNumbers([])); // []
