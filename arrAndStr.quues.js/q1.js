// Question:
// You have the following array:
// const fruits = ['apple', 'banana', 'orange'];
// Write a code snippet to:

// Add 'grape' to the end of the array using an appropriate inbuilt array method.
//     Remove 'apple' from the beginning of the array using an inbuilt array method.
//         Expected Output:
//             After the operations, the array should look like this: ['banana', 'orange', 'grape'].


const fruits = ['apple', 'banana', 'orange'];

fruits.push("grape")
console.log(fruits)

fruits.shift()
console.log(fruits)
