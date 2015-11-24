var utility = {

  wordToLowerCase: function(word) {
    word = word.split('');
    var lowercase = word.map(function(letter) {
      return letter.toLowerCase();
    });
    return lowercase.join('');
  },

  textToLowerCase: function(text) {
    text = text.split(' ');
    var lowercase = text.map(function(word) {
      return utility.wordToLowerCase(word);
    });
    return lowercase.join(' ');
  },

  wordFoundInText: function(word, text) {
    word = utility.wordToLowerCase(word);
    text = utility.textToLowerCase(text).split(' ');
    var found = false;

    if (word === '') {
      return true;
    }

    text.forEach(function(string) {
      if (word === string) {
        found = true;
      }
    });
    return found;
  }

};
