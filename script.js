// $(document).ready(function() {
// generate a word for the user to guess
let generateRandomWord = () => {
    var wordBank = ["atlanta",
        "toronto",
        "dallas",
        "birmingham",
        "miami",
        "vegas",
        "memphis",
        "orlando"
    ];
    // var wordBank = ["to"];
    var randomNumber = Math.random();
    var randomWholeNumber = Math.floor(randomNumber * wordBank.length);
    var randomArrayWord = wordBank[randomWholeNumber];
    return randomArrayWord;
}

// retrieving random word from the array 
var randomArrayWord = generateRandomWord();

// have the letter that was clicked on appear in a div *** never used
let addLetter = () => {
    $(".letterBox").append(event.currentTarget.innerHTML);
}
// get the length of the generated word
var randomWordLength = randomArrayWord.length;

// create a series of boxes that corresponds to that length
var letterBox = "";
for (let i = 0; randomWordLength > i; i++) {
    letterBox = `<div id='box${i}' class='letterBox'><div class='underlinedLetterArea'></div></div>`;
    $(".letterArea").append(letterBox);
}

// lines for the amount of wrong guesses
var wrongGuesses = [];

// lines for the amount of right guesses
var rightGuesses = [];

// lines for the amount of wrong guesses the user starts with
var totalGuesses = 6;

// lines for the amount of wins the player has
var totalWins = 0;

// lines for the amount of losses the player has
var totalLosses = 0;

// change cursor to pointer
$(".alphabetLetter").css('cursor', 'pointer');