/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

*/

/*
PSEUDOCODE

READ input;
READ str AS splitted input string;
READ output AS empty array;

READ alphabet AS 'abcdefghijklmnopqrstuvwxyz';
READ h8bi AS '!@#$%^&*()-+1234567890[]{}';
READ len AS length of alphabet;

FOR i = 0, until length of str - 1
  FOR j = 0, until value of len - 1
    IF str index of i EQUALS TO alphabet index of j THEN
      PUSH h8bi index of j into output array;
    ELSE IF str index of i EQUALS TO h8bi index of j THEN
      PUSH str index of i into output array;
    END IF
    INCREMENT j by 1;
  END FOR
END FOR

READ display as joined value of array output;
DISPLAY display;

*/
function encrypt(input) {
  // your code here
  var str = input.split('');
  var output = [];

  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var h8bi = '!@#$%^&*()-+1234567890[]{}';
  var len = alphabet.length;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' ' || str[i] === '€') {
      output.push(str[i]);
    }

    for (var j = 0; j < len; j++) {
      if (str[i] === alphabet[j]) {
        output.push(h8bi[j]);
      } else if (str[i] === h8bi[j]) {
        output.push(str[i]);
      }
    }
  }
  var display = output.join('');
  return display;
}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2
