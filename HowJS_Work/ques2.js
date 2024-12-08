// Write a function createCounter that uses closures 
// to create a simple counter. The function should:

// Allow incrementing the counter.
// Allow decrementing the counter.
// Display the current count.

// The function should not expose the counter variable
// directly to the outside world.

// Example Usage:

// const counter = createCounter();
// counter.increment(); // Output: Current count: 1
// counter.increment(); // Output: Current count: 2
// counter.decrement(); // Output: Current count: 1
// Tasks:

// Implement the createCounter function.
// Explain how closures are being used to encapsulate the counter variable.
// What happens if multiple counters are created using the same function? 
// Provide examples 
// to demonstrate this behavior.

function createCounter() {
    let count = 0
    return {
        increment: function () {
            count++
            console.log(`Current count: ${count}`)
        },
        decrement: function () {
            count--
            console.log(`Current count: ${count}`)
        },
        currentCount: function () {

            console.log(`Current count: ${count}`)
            return count
        }
    }


}
let counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()

counter.currentCount()