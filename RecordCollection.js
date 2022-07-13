/*
Update the gienn record collection in given function.
- if values are empty then delete the given property of the object.
- if given property is tracks then just append the new values to the tracks list.
- if given property is tracks and it is empty then create empty empty array and insert
  values into that array.
- otherwise update the values of given property as per provided data.
*/


// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

// To update the existing records.
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop == "tracks") {
        // here if tracks are not empty then set it as it is,
        // but if tracks is empty then first assign empty array to it.
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value)
    } else {
        collection[id][prop] = value
    }
    return collection;
}

updateRecords(2468, "tracks", "test");
updateRecords(5439, "artist", "ABBA");
console.log(updateRecords(5439, "tracks", "Yo yo"));


