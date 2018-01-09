// hangman 
// require all the packages you need
var inquirer = require("inquirer");
var Word = require("./word.js");
var prompt = require('prompt');
var fs = require('fs');


// inquirer to prompt user for letter guessed 
prompt.start();
game = {
    wordArray: ['dude', 'monkey', 'love', 'css', 'mysql'],
    guessesRemaining: 5,
    currentWord: null,

// start game function choose a random word 

startGame: function () {
    this.resetGame();
    this.currentWord = new Word(this.wordArray[Math.floor(Math.random() * this.wordArray.length)]);
    this.currentWord.letterPush();
    this.currentWord.wordRender();
    this.promptUser();
},

resetGame: function () {
    this.guessesRemaining= 5;
},

promptUser: function(){
    var that = this;
    prompt.get(['guessLetter'], function(err, result){
        // log out the client's guessed letter
        console.log("your letter guessed is: " + result.guessLetter);
        // create var that checks if letter guessed is correct or not
        var guessBool = that.currentWord.checkLetter(result.guessLetter);
        // let the client know whats up if word was incorrect 
        if (guessBool == 0){
            console.log("Lo Siento incorrect ");
            that.guessesRemaining--;
            // else if answer was correct
        } else {
            console.log("Si good job");
            if(that.currentWord.checkFind()){
                console.log("Winner the word is :" + that.currentWord.word);
                console.log("/-/-/-/-/-/-/-/-/-/-/-/-/-");
                return;
            }
        }
        console.log("Guesses Left: " + that.guessesRemaining);
        if ((that.guessesRemaining > 0) && (that.currentWord.find == false)) {
            that.currentWord.wordRender();
            that.promptUser();
        } else if (that.guessesRemaining === 0 ){
            console.log("Sorry Game Over : " + that.currentWord.word);
            }
        });
    }
};

game.startGame();
    