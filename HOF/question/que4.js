// You are tasked with building an Employee Performance 
// Evaluation System. You have an array of employee objects,
// where each employee has the following properties: name, 
// tasksCompleted, and rating. Your task is to perform the 
// following steps using higher-order functions:

// Filter the employees who have completed more than 5 tasks.
// Map the filtered employees to a new array that contains only 
// the employee's name and their performance level. 
// The performance level is determined by the following criteria:
// If rating is above 4.5, their performance level is "Excellent".
// If rating is between 3 and 4.5 (inclusive), their performance level 
// is "Good".
// Otherwise, their performance level is "Needs Improvement".
// Sort the final array of employees in descending order based on
// their performance level, prioritizing "Excellent", then "Good",
// and finally "Needs Improvement".
// Return the final sorted array containing the employee 
// names and their performance levels.
// Example:

// Input: [

// { name: "Alice", tasksCompleted: 8, rating: 4.7 },

// { name: "Bob", tasksCompleted: 4, rating: 4.0 },

// { name: "Charlie", tasksCompleted: 6, rating: 3.5 },

// { name: "David", tasksCompleted: 10, rating: 4.9 },

// { name: "Eve", tasksCompleted: 7, rating: 2.8 }

// ]

// Output: [

// { name: "David", performance: "Excellent" },

// { name: "Alice", performance: "Excellent" },

// { name: "Charlie", performance: "Good" }

// ]

// Explanation:

// Bob and Eve are excluded because they did not complete more than 5 tasks.
// David and Alice are marked as "Excellent" due to their high ratings, while 
// Charlie is marked as "Good".

let employee = [

    { name: "Alice", tasksCompleted: 8, rating: 4.7 },

    { name: "Bob", tasksCompleted: 4, rating: 4.0 },

    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },

    { name: "David", tasksCompleted: 10, rating: 4.9 },

    { name: "Eve", tasksCompleted: 7, rating: 2.8 }

]

// filter base on rationg above 5
let completedFiveTaskEmpo = employee.filter((ele) => {
    return ele.tasksCompleted > 5
})
console.log(completedFiveTaskEmpo)


//  sorted array in asssending ordder
completedFiveTaskEmpo.sort((a, b) => {
    return b.rating - a.rating
})
console.log(completedFiveTaskEmpo)

// base on rationg performance

let EmployeeNameAndPerfo = completedFiveTaskEmpo.map((ele) => {
    let empPerform = ele.rating > 4.5 ? `Excellent` : ele.rating >= 3 && ele.rating <= 4.5 ? "Good" : "Need Improvement"
    return { name: ele.name, performance: empPerform }

})
console.log(EmployeeNameAndPerfo)


