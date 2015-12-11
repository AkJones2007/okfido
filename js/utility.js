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

  formToObject: function(form) {
    var object = {};
    $(form).children().each(function(index, element) {
      var type = $(this).attr('type');
      if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
        object[$(this).attr('name')] = $(this).val();
      }
    });
    return object;
  },

  wrapObject: function(key, data) {
    var wrapped = {};
    wrapped[key] = data;
    return wrapped;
  }

};
