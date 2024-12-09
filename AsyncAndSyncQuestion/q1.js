// Write a JavaScript program that demonstrates 
// synchronous code execution. You should create three 
// console logs that print "Task 1", "Task 2", and "Task 3" 
// in sequence. Since synchronous code runs line-by-line, the 
// console output should display each task in the order they are written.



function task1() {
    console.log("Task 1")
    task2()
}
function task2() {
    console.log("Task 2")
    task3()
}
function task3() {
    console.log("Task 3")

}
task1()