var quotes = [
    'Any fool can write code that a computer can understand.Good progammers write code that humans can understand.',
    'Experience is the name everyone gives to their mistakes.',
    'In order to be irreplaceable, one must always be different',
    'Java is to JavaScript what car is to Carpet.',
    'Sometimes it pays to stay in bed on Monday, rather than spending the rest of week debugging Mondays code.',
    'Code is like humor. When you have to explain it, its bad.',
    'Make it work, make it right, make it fast',
    'All problems in Computer Science can be solved by another level of indirection.',
    'If we wish to count lines of code, we should not regard them as lines prduced but as lines spent',
    'There are only two hard things in computer science: cache invalidation and naming things.'
]
function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}