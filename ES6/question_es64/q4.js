// You are given two nested objects: profile and updates.Your task is to merge the two objects using the spread operator, ensuring that specific nested properties in updates overwrite those in profile.

//     Steps:
// Create two objects:
// profile: contains name, age, address(which is an object with properties like city and zipcode).
// updates: contains updated age, and an updated address object with a new zipcode and added country property.
// Merge the objects using the spread operator, ensuring the updated properties from updates overwrite the existing ones.
//     Return the new merged object.
// Example Input

// const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };

// const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };

// Example Output:

// { name: "Charlie", age: 30, address: { city: "San Francisco", zipcode: "94109", country: "USA" } }

const profile = {
     name: "Charlie",
      age: 29, 
      address: {   
                 city: "San Francisco",
                 zipcode: "94101" 
                } 
            };

const updates = {
     age: 30,
     address: {
                 zipcode: "94109",
                 country: "USA" } };



// (profile  ko kuch nhi krna name and age  only work on address to just spred  use in address of both )
let mergeadd = { ...profile.address, ...updates.address }

const mergeObj = {...profile,address:{mergeadd }}

console.log(mergeObj)                