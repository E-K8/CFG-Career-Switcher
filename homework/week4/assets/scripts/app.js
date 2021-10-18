const options = [
    `Highly likely.`,
    `I can't see it happening soon, but it's possible.`,
    `Of course, darling! No doubt about that.`,
    `No. It can become 'yes' if your want it badly enough.`,
    `The answer isn't clear. Are you sure you wanted to ask that?`,
    `Ask yourself - deep down you already know the answer.`,
    `It will happen for you in the most magical way.`,
    `Unclear. Please reformulate.`,
    `The autumn will be wonderful for you, but the winter will be even better.`
];


function randomReply() {
    // generate a random number between 0 and the number of the array items
    const randomNumber = Math.floor(Math.random() * options.length);

    // print the random number to the console log to make sure it's working
    console.log("random number: " + randomNumber);

    // take the fortune at the random spot in the array and insert it into the "fortune" div
    document.getElementById("reply1").innerHTML = options[randomNumber];
}

function reset() {
    // what goes here? (hint: make the fortune div contain an empty string)
    document.getElementById("reply1").innerHTML = "";
}