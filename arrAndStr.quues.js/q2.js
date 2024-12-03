// 2.
// Question:
// You have a string:
// const sentence = ' JavaScript is fun ';
// Write a code snippet to:

// Remove extra spaces at the beginning and end of the string using a relevant string method.
//     Convert the string to uppercase using another string method.
//     Split the string into an array of words using an inbuilt string method.
//         Expected Output:
//             ['JAVASCRIPT', 'IS', 'FUN']


const sentence = ' JavaScript is fun ';
// trim for remove extra space
let trim_sen=sentence.trim()
console.log(trim_sen)

let uppercaseSen = trim_sen.toUpperCase()
console.log(uppercaseSen)

split_sentence = uppercaseSen.split(" ")
console.log(split_sentence)