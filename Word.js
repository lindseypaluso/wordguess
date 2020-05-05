// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
var Letter = require("./Letter")
// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

function Word(word) {
    // this.lettersOfWord = word.split("");
    // this.generateLetterObject = function() {
        // for (i=0; i< lettersOfWord.length; i++) {
            // return new Letter(lettersOfWord[i]);
       // }
   // }
    // this.letters = generateLetterObject();

    this.letters = word.split("").map(function(char) {
        return new Letter(char)
    })

    

    this.buildWord = function() {
        // call the buildString func for each letter
        // concateante all of them together
        // return that string
    }

    this.guessLetter = function() {

    }
}

