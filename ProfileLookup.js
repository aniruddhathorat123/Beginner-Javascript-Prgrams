/*
Given array of contacts objects.
create the function which return value for given proprty and name of person.
if no person with given name then return "no such contact"
if no person whth given property then return "no such property"
*/

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i]["firstName"] === name) {
            // if property exist then return property otherwise no property return.
            return contacts[i][prop] || "No such property.";
        }
    }
    return "No such contact.";
}

console.log("Sherlock likes : " + lookUpProfile(`Sherlock`, 'likes'));
console.log("contect number of robert : " + lookUpProfile("robert", "number"));
console.log("Middle name of Harry : " + lookUpProfile(`Harry`, 'middleName'));