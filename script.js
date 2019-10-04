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