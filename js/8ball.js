let userName= "Eliel";
userName ? console.log("Hello, " + userName + "!") : console.log("Hello!")

let userQuestion = "Good"
userQuestion ? console.log("How are you?," + userQuestion + "!") : console.log("How are you?")

// Generate a random number between 0 and 7
var randomNumber = Math.floor(Math.random() * 8);

// Display the random number
console.log(randomNumber);

// Create a variable named eightBall and set it to an empty string
var eightBall = '';

// Display the random number and the initial value of eightBall
console.log('Random Number:', randomNumber);
console.log('eightBall:', eightBall);


// Generate a random number between 0 and 7
var randomNumber = Math.floor(Math.random() * 8);

// Create a variable named eightBall and set it to an empty string
var eightBall = '';

// Assign values to eightBall based on the randomNumber
if (randomNumber === 0) {
    eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
}

// Display the Magic Eight Ball's answer
console.log('Magic Eight Ball Answer:', eightBall);
