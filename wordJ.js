function getGuess() {

    inquirer.prompt(questions).then(answers => {
        console.log(JSON.stringify(answers, null, '  '));
        guessedLetters.push(answers.letter.toLowerCase());

        if (solutionWord.includes(answers.letter)) {
            console.log("correct");
        } else {
            console.log("incorrect");
        }
        // if all letters in the solutions are found in guessletters array  

        if (solutionWord.isSolved(guessedLetters)) {
            console.log("You Win");
        } else {
            getGuess();
        }
    }).catch(console.log);

};

getGuess();
//////////////////////// this code above was with es6 and fancy version///////



// Used to create an object representing the current word the user is attempting to guess
function Word(value) {
    this.value = value;
    this.letters = [];
    this.find = false;
}
// Returns true if all the letters in word.value are found in the
// guessedLetters argument (array)

Word.prototype.includes = function wordIncludesLetter(letter) {
    return this.value.includes(letter.toLowerCase());
}

Word.prototype.isSolved = function isWordSolved(guessedLetters) {
    return this.value
        .split('')
        .every(letter => {
            return guessedLetters.includes(letter.toLowerCase());
        });
}
// const word = new Word('donut');
// const guessed = 'dontu'.split('');
// console.log(`Is word solved? ${word.isSolved(guessed)}`);

module.exports = Word;