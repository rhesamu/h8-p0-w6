/**
Highest Top Speed
=================
Implementasikan function `highestTopSpeed` untuk mencari
top speed yang paling tinggi dari data yang diberikan.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data string.

Di dalam string `data` terdapat nama orang dan top speed orang
tersebut. Tiap orang akan dipisah dengan tanda koma ','
Tugas kamu adalah untuk mencari top speed tertinggi dari
string yang telah diberikan

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika string kosong, maka tampilkan 'No data'

# Constraints
- DILARANG menggunakan built-in function .map, .filter, .reduce
- DILARANG menggunakan built-in object Math
- DILARANG menggunakan built-in function .sort
- DILARANG menggunakan built-in function .indexOf
*/

function highestTopSpeed (data) {
  // your code here
  if (data.length === 0) {
    return "No data"
  }

  var driver = data.split(',');
  var speeds = [];
  var topSpeed = [];

  for (var i = 0; i < driver.length; i++) {
    var temp = driver[i].split(':')
    speeds.push(temp);
  }

  for (var i = 0; i < speeds.length; i++) {
    var temp = speeds[i][1].split(' km/h');
    topSpeed.push(temp[0])

  }
  // console.log(topSpeed);

  for (var i = 0; i < topSpeed.length; i++) {
    for (var j = i+1; j < topSpeed.length; j++) {
      if (topSpeed[j] > topSpeed[i]) {
        var temp = topSpeed[i];
        topSpeed[i] = topSpeed[j];
        topSpeed[j] = temp;
      }
    }
  }

  return topSpeed[0];
}

console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
// 180

console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
// 200

console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
// 175

console.log(highestTopSpeed(''));
// No data
