// require Letter constructor

var Letter = require('./letter.js');

// Word constructor

var Word = function (results) {
    // grabbing the parameter
    this.word = results;
    // letter array
    this.letters = [];
    //  if user finds the word, false should be on 
    this.find = false;
    // pushes each letter to the letter array
    this.letterPush = function () {
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter);
        }
    };
    // checks to see if guessed letter is in the word
    this.checkLetter = function (guessedLetter) {
        // letter counter
        var counter = 0;
        // loop through each letter to check if user letter is in there
        for (var i = 0; i < this.letters.length; i++) {
            // if letter is the correct guessed letter then change the indicator from false to true
            if (this.letters[i].char == guessedLetter) {
                this.letters[i].show = true;
                counter++;
            
            }
        }
        // number of letters shown
        return counter;

    };

    // check to see if user find the word
    this.checkFind = function () {
        // check every letter in the letter array, if all of the  is true, then return true, otherwise, return false
        this.find = this.letters.every(function (letter) {
            // console.log(letter.show);
            return letter.show;
        });
        // console.log(this.find);
        return this.find;
    };

    // show word
    this.wordRender = function () {
        var wordString = '';
        for (var i = 0; i < this.letters.length; i++) {
            wordString += this.letters[i].letterRender();
        }
        console.log(wordString);
    };

}


// export
module.exports = Word;