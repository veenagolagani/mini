// Function to print name 10 times using setTimeout
function print1() {
  var name = "Your Name"; // Replace with your actual name
  var count = 0;

  function printWithDelay() {
    if (count < 10) {
      console.log((count + 1) + ": " + name);
      count++;
      setTimeout(printWithDelay, 1000); // Call again after 1 second
    }
  }

  printWithDelay(); // Start printing
}

// Function to print name 10 times using setInterval
function print2() {
  var name = "Your Name"; // Replace with your actual name
  var count = 0;

  var intervalId = setInterval(function () {
    if (count < 10) {
      console.log((count + 1) + ": " + name);
      count++;
    } else {
      clearInterval(intervalId); // Stop after 10 prints
    }
  }, 1000);
}

// To test the functions, uncomment one at a time:
// print1();
print2();
