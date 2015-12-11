var searchResult = {
  source: $('#search-results').html(),
  compile: Handlebars.compile(this.source),
  template: function(content) {
    this.compile(content);
  }
}
