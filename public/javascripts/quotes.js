function getQuote() {
  var quoteElement = document.getElementById('quote');
  var authorElement = document.getElementById('author');
  var quotes = getQuotes();
  var authors = getAuthors();
  if (quotes.length != authors.length) {
    console.error('Unable to retrieve a quote due to quote/author mismatch.');
  }
  var index = Math.floor(Math.random()*quotes.length);
  quoteElement.innerHTML = quotes[index];
  authorElement.innerHTML = authors[index];
}

function getQuotes() {
  return [
    '"Perfecting oneself is as much unlearning as it is learning."',
    '“I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.”',
    '"The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense."',
    '"In the one and only true way. The object-oriented version of \'Spaghetti code\' is, of course, \'Lasagna code\'. (Too many layers)."',
    '"Premature optimization is the root of all evil in programming."',
    '"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."',
    '"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."',
    '“To iterate is human, to recurse divine.”',
    '"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."'
  ];
}

function getAuthors() {
  return [
    '- E.W. Dijkstra',
    '- Oktal',
    '- E.W. Dijkstra',
    '- Roberto Waltman.',
    '- C.A.R. Hoare',
    '- M. Golding',
    '- Bill Gates',
    '- L. Peter Deutsch',
    '- Linus Torvalds'
  ];
}
