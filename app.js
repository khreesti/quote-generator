var quotes = [
  "But man is not made for defeat. A man can be destroyed but not defeated. Ernest Hemingway",
  "There is nothing permanent except change. Heraclitus",
  "You cannot shake hands with a clenched fist. Indira Gandhi",
  "Learning never exhausts the mind. Leonardo da Vinci",
  "The supreme art of war is to subdue the enemy without fighting. Sun Tzu"

]

function newQuote() {
  //alert('hello')
  var randNum = Math.floor(Math.random() * (quotes.length))
  document.getElementById('quoteDisplay').innerHTML = quotes[randNum]
}

