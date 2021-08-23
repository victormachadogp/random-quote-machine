// #8: When the #new-quote button is clicked,
// my quote machine should fetch a new quote
// and display it in the #text element.
const newQuoteButton = document.querySelector('#new-quote')
newQuoteButton.addEventListener('click', fetchRandomQuote)

async function fetchRandomQuote() {
  const response = await fetch('https://api.quotable.io/random')
  const quote = await response.json()
  console.log(quote)
}
