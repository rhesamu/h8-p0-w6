/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `viruses` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  viruses: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4 viruses detected

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  viruses: 'h|r' ==> berarti mencari h dan r

outuput: 3 viruses detected


RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX

*/

/*
ALGORITMA
READ str;
READ viruses;

READ checkStr;
IF viruses is undefined THEN
  STORE checkStr as '';
ELSE IF viruses.length === 1 THEN
  STORE checkStr as viruses;
ELSE
  SPLIT viruses by '|';
  STORE to checkStr;
END IF

READ count = 0;
FOR index1 in length of str
  FOR index2 in length of checkStr
    IF checkStr[index2] === str[index1] THEN
      INCREMENT count by 1;
    END IF
  INCREMENT index2 by 1;
INCREMENT index1 by 1;
END FOR

IF count is 0 THEN
  DISPLAY 'No virus detected';
ELSE IF count is 1 THEN
  DISPLAY count + ' virus detected'
ELSE
  DISPLAY count + 'viruses detected'
END IF

*/

function virusCheck (str, viruses) {
  // your code here
  if (viruses === undefined) {
    var checkStr = '';
  }
  else if (viruses.length === 1) {
    var checkStr = viruses;
  }
  else {
    var checkStr = viruses.split('|');
  }
  //console.log(checkStr);
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < checkStr.length; j++) {
      if (checkStr[j].toLowerCase() === str[i].toLowerCase()) {
        count++;
      }
    }
  }

  if (count === 0) {
    return `No virus detected`;
  } else {
    if (count === 1) {
      return `${count} virus detected`;
    }
    return `${count} viruses detected`;
  }

}

console.log(virusCheck('qlD4MZax0raQqew', 'x|0|q')); // 4 viruses detected
console.log(virusCheck('HH0NBP1zRa', 'h|r')); // 3 viruses detected
console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6 viruses detected
console.log(virusCheck('mjBgPlzks', 'm')); // 1 virus detected
console.log(virusCheck('AIn4Ks05bBaa', 'x')); // No virus detected
console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
console.log(virusCheck('')); // No virus detected
