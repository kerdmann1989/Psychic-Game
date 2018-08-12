var wins = 0;
var losses = 0;
var guessesLeft = 9;
var chosenLetter = null;
var guessesSoFar = [];

//array of letters to choose from
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//reset game function
var reset = function () {
    guessesLeft = 9;
    guessesSoFar.length =[];
};

//identifies what key is being pressed by user, converts to lower case
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode) .toLowerCase();

//random choice by computer
var chosenLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//pusshes guessed letter to array
guessesSoFar.push(userGuess);

    
//if guess is correct, increase wins by one, reset game
if (userGuess === chosenLetter) {
    wins++;
    alert("You Won!");
    reset();
}
//if guess guesses reach nine, increases losses by one, reset game 
else if (guessesLeft < 2) {
    losses++;
    alert ("You lost. Would you like to try again?");
    reset();
}

else  {
    guessesLeft--;
}


//displays results in HTML

var html = 
    "<p>Total Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Remaining: " + guessesLeft + "</p>"+
    "<p>Guesses So Far: " + guessesSoFar + "</p>";
    document.querySelector("#game").innerHTML = html;
}





