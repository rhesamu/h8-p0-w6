/**
Participants Summary
--------------------
Diberikan data dalam bentuk array multidimensi yang berisi
orang-orang yang akan ikut dalam Hackathon yang
diselenggarakan bulan depan.

Implementasikan function `participantsSummary` untuk
mengeluarkan laporan negara mana saja yang mengikuti,
ada berapa orang yang mewakili negara tersebut dan
nama peserta dari negara tersebut

Contoh ada di test cases
*/

function participantsSummary (data) {
  // Your code here
  if (data.length === 0) {
    return 'No participants'
  }

  var countries = {};
  var counter = {}

  for (var i = 0; i < data.length; i++) {

    if (!countries[data[i][1]]) {
      counter[data[i][1]] = 1;

      countries[data[i][1]] = {}
      countries[data[i][1]]['total'] = counter[data[i][1]];
      countries[data[i][1]]['names'] = [];
      countries[data[i][1]]['names'].push(data[i][0]);
    }
    else {
      counter[data[i][1]]++
      countries[data[i][1]]['total'] = counter[data[i][1]]
      countries[data[i][1]]['names'].push(data[i][0]);
    }
  }
  return countries;
}

// Test cases
console.log(participantsSummary([
  ['Dimitri', 'Russia'],
  ['Heihachi', 'Japan'],
  ['Sergei', 'Russia'],
  ['Kazuya', 'Japan'],
  ['Hwoarang', 'South Korea'],
  ['Jin', 'Japan']
]));
/*
{
  Russia: {
    total: 2,
    names: [ 'Dimitri', 'Sergei' ]
  },
  Japan: {
    total: 3,
    names: [ 'Heihachi', 'Kazuya', 'Jin' ]
  },
  'South Korea': {
    total: 1,
    names: [ 'Hwoarang' ]
  }
}
*/

console.log(participantsSummary([
  ['Suzuka', 'Japan'],
  ['Steve', 'United Kingdom'],
  ['Paul', 'USA']
]));
/*
{
  Japan: {
    total: 1,
    names: [ 'Suzuka' ]
  },
  'United Kingdom': {
    total: 1,
    names: [ 'Steve' ]
  },
  USA: {
    total: 1,
    names: [ 'Paul' ]
  }
}
*/

console.log(participantsSummary([]));
// No participants
