// Create a JavaScript program that simulates a loading screen
// using setInterval.The program should:

// Start by logging "Loading..." every 1 second.
// After 5 seconds, stop the loading messages and log "Loaded successfully!".

// Use setInterval to repeat the loading message and clearInterval to stop
// it after 5 seconds.
const inter= setInterval(() => {
    console.log("Loading...")
}, 1000)
setTimeout(() => {
    clearInterval(inter)
    console.log("Loaded successfully!")
  
}, 4000);
