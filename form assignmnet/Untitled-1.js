// Function using setTimeout to print name 10 times with 1-second delay
function print1() {
    const name = "Your Name";
    const totalPrints = 10;

    for (let i = 0; i < totalPrints; i++) {
        setTimeout(() => {
            console.log(`print1 - ${name} (${i + 1})`);
        }, i * 1000); // Delay increases with each iteration (1s steps)
    }
}

// Function using setInterval to print name 10 times with 1-second interval
function print2() {
    const name = "Your Name";
    const totalPrints = 10;
    let counter = 0;

    const intervalId = setInterval(() => {
        console.log(`print2 - ${name} (${counter + 1})`);
        counter++;

        // Stop after 10 prints
        if (counter >= totalPrints) {
            clearInterval(intervalId);
        }
    }, 1000); // Interval of 1 second
}

// Call the functions (can be run one at a time)
print1();

// To test print2 separately, wait 11 seconds or comment out print1() above
// setTimeout(print2, 11000); // Delayed call to avoid overlap
