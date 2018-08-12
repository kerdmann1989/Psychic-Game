var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var chosenLetter = null;
var guessedKeys = [];


var chooseLetter = function () {
    chosenLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

var updateGuessesLeft = function () {
    document.getElementById("guessesLeft").innerHTML = guesses;
}

var updateGuessesSoFar = function () {
    document.getElementById("guessesSoFar").innerHTML = guessedKeys.join(", ");
}

var reset = function () {
    guesses = 9;
    guessedKeys = [];
    chooseLetter();
    updateGuessesLeft();
    updateGuessesSoFar();
  
    // document.getElementById("#guessedKey").innerHTML = 'Your Guesses:';
    // chooseLetter();
};

updateGuessesLeft();
updateGuessesSoFar();

chooseLetter();
console.log(chosenLetter);


document.onkeydown = function (event) {
    var guessedKey = String.fromCharCode(event.which).toLowerCase();

    guessedKeys.push(guessedKey)
    updateGuessesLeft();
    updateGuessesSoFar();

// var chosenLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(chosenLetter);

if (guessedKey === chosenLetter) {
    alert("You Won!");
    wins++;
    document.getElementById("wins").innerHTML = wins;
    reset();
    
}

else if (guesses === 0) {
    alert ("You lost. Would you like to try again?");
    losses++;
    document.getElementById("losses").innerHTML = losses;
    reset();
}

else  {
    guesses--;
}
}



// var html = 
//         "<p>Wins: " + wins + "</p>" +
//         "<p>Losses: " + losses + "</p>" +
//         "<p>Guesses Remaining: " + guesses + "</p>";
//         // "<p>Guesses So Far: " + chosenLetter + "</p>";
//         document.querySelector("#game").innerHTML = html;
//         guessedKey = " " + guessedKey;
//         document.querySelector("#guessedKey").innerHTML += guessedKey;
//         }




