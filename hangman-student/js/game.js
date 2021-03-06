var word = {
  secretWord: "",
  secretWordWithBlanks: "",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

  // Selects a random word from the word list sets the secret word
  setSecretWord: function() {
    this.secretWord = _.shuffle(word.wordList)[5];console.log(this.secretWord);
    for ( var i = 0; i < this.secretWord.length; i++ ) {
      this.secretWordWithBlanks += ("_");
    }
  },

  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word
  checkLetters: function(guessedLetters){
    var correctLetters = _.intersection(this.secretWord, guessedLetters);
    var wrongLetters = _.difference(guessedLetters, correctLetters);
    var displaySecret = [];
    _.each(this.secretWord, function(letter){
      if (_.contains(correctLetters, letter)) {
        displaySecret += letter;
      } else {
        displaySecret += "_";
      }
    });
    console.log(displaySecret);
    console.log(wrongLetters);
    return [displaySecret, wrongLetters];
  }
};

var player = {
  MAX_GUESSES: 8,
  guessedLetters: [],

  // Takes a new letter as input and updates the game
  // guesses come from word.checkLetters(guessedLetters)
  makeGuess: function(letter){
    player.guessedLetters.push(letter);
    player.checkWin();
    player.checkLose();
    game.updateDisplay(word.checkLetters(player.guessedLetters)[0].join(" "), player.guessedLetters);
  },
  //

  // Check if the player has won and end the game if so
  checkWin: function(wordString){
  if (_.contains(wordString, "_")) {
    return false;
  } else {
    return true;
  }
},

  // Check if the player has lost and end the game if so
  checkLose: function(wrongLetters){}
};

var game = {
  // Resets the game
  resetGame: function(){},

  // Reveals the answer to the secret word and ends the game
  giveUp: function(){},

  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){
     document.getElementById("guessedLetters").innerHTML = player.guessedLetters.join(" ");
};

window.onload = function(){
  word.setSecretWord();
  console.log(word.secretWord);
  // Start a new game
  // Add event listener to the letter input field to grab letters that are guessed
  // Add event listener to the reset button to reset the game when clicked
  // Add event listener to the give up button to give up when clicked
};
