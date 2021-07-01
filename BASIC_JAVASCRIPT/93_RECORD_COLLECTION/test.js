var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
    if (prop != 'tracks' && value != '') {
        records[id][prop] = value;
    } else if (prop == 'tracks' && !records[id].hasOwnProperty('tracks')) {
        records[id]['tracks'] = [];
        records[id]['tracks'].push(value);
    } else if (prop == 'tracks' && value != '') {
        records[id]['tracks'].push(value);
    } else if (value == '') {
        delete records[id][prop];
    }
    return records;
}

console.log(
    updateRecords(
        recordCollection, 
        5439, 
        "artist", 
        "ABBA"
    )
); // artist should be the string ABBA

console.log(
    updateRecords(
        recordCollection, 
        5439, 
        "tracks", 
        "Take a Chance on Me"
    )
); // tracks should have the string Take a Chance on Me as the last element.

console.log(
    updateRecords(
        recordCollection, 
        2548, 
        "artist", 
        ""
    )
); // artist should not be set

console.log(
    updateRecords(
        recordCollection, 
        1245, 
        "tracks", 
        "Addicted to Love"
    )
); // tracks should have the string Addicted to Love as the last element.

console.log(
    updateRecords(
        recordCollection, 
        2468, 
        "tracks", 
        "Free"
    )
); // tracks should have the string 1999 as the first element.

console.log(
    updateRecords(
        recordCollection, 
        2548, 
        "tracks", 
        ""
    )
); // tracks should not be set

console.log(
    updateRecords(
        recordCollection, 
        1245, 
        "albumTitle", 
        "Riptide"
    )
); // albumTitle should be the string Riptide