# Record Collection
You are given a JSON object representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.
You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire object.
- If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
- If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
- If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
- If value is an empty string, delete the given prop property from the album.
- Note: A copy of the collection object is used for the tests.

Problem Explanation
For the given id parameter, which is associated to the object:
- If the value parameter isn’t an empty string, update (or set) the value parameter for the prop parameter.
- If the prop parameter is equal to "tracks" and the value isn’t an empty string, push the value onto the end of the tracks array.
- If value is an empty string, delete that prop from the object.
- Finally, return object.

# Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

- If both are true, then return the "value" of that property.
- If name does not correspond to any contacts then return the string No such contact.
- If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

https://www.freecodecamp.org/