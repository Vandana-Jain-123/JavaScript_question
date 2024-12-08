// Declare a global variable age and assign a value to it.

// Create a function displayAge that logs the value of age.

// Create a second function changeAge, which changes the value of age.

// Call displayAge and changeAge and check how the value of age is updated.

let age = 23;
function displayAge() {
    console.log(age)
    function changeAge() {
        age = 25
        console.log(age)
    }
    changeAge()
}

displayAge()

// value of age is change due to closer in wich inner function grab the outer function
// scope and take refence of outer variable   na ki value