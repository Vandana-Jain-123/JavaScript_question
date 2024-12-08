
// You are given an array of strings representing product 
// categories. Your task is to use reduce() to create an object
// that counts the occurrences of each category in the array.

// Steps:

// Use reduce() to group the categories and count how many times 
// each category appears.
// Return the resulting object.
// Example:

// Input: ["electronics", "clothing", "electronics", 
// "toys", "clothing", "toys", "toys"]

// Output: { electronics: 2, clothing: 2, toys: 3 }

// Extra Challenge: After creating the object, use Object.entries() 
// and sort() to sort the categories by their counts in descending 
// order and return an array of sorted categories.

let input = ["electronics", "clothing", "electronics",
    "toys", "clothing", "toys", "toys"]
let result = input.reduce((acc, ele, i) => {
    if (acc[ele] == undefined) {
        acc[ele] = 1
    } else {
        acc[ele]++
    }
    return acc
}, {})
console.log(result)
// After creating the object, use Object.entries() 
let sortedCategory = Object.entries(result).sort((a, b) => {
    return b[1] - a[1]
})

console.log(sortedCategory)



