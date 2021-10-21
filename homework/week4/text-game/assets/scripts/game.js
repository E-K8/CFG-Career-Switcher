function textGame() {
    alert(`Hi, I am the game bot, glad to assist you!`);

    const playerName = prompt(`Please enter your name:`);

    let startGame = confirm(`Would you like to answer a few questions, ${playerName}?`);

    let countries = [
        `France`,
        `Italy`,
        `USA`,
        `Australia`,
        `China`
    ];

    let countriesList = [];
    let countriesTotal = 0;

    if (startGame) {
        alert(`Yay, we are on!`);
        for (let i = 0; i < countries.length; i++) {
            let travelQuestion = confirm(`Have you ever been to ${countries[i]}?`);
            if (travelQuestion)
                countriesList.push(countries[i]);
        }

        for (let i = 0; i < countriesList.length; i++) {
            if (countriesList[i] === `France`)
                countriesTotal = countriesTotal + 1
            if (countriesList[i] === `Italy`)
                countriesTotal = countriesTotal + 1
            if (countriesList[i] === `USA`)
                countriesTotal = countriesTotal + 1
            if (countriesList[i] === `Australia`)
                countriesTotal = countriesTotal + 1
            if (countriesList[i] === `China`)
                countriesTotal = countriesTotal + 1
        }

        if (countriesTotal > 3)
            alert(`Wow, you seem like an experienced globetrotter!`)
        else
            alert(`Apologies if countries you visited were not on this list, next time I'll be more prepared!`)
    } else
        alert(`No problem, have a good day!`)
}