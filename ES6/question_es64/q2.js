// Write an arrow function that takes a number as input and returns both 
// its square and cube in an object, using implicit return.The function 
// should be as concise as possible.

//     Requirements:
// The arrow function should use implicit return (no curly braces or return keyword).
// The function should return an object in the format { square, cube }.
// Example Input:

// 5

// Example Output:

// { square: 25, cube: 125 }

const sqr_cube=(n)=>({ square: n**2 , cube: n**3 })

console.log(sqr_cube(4))