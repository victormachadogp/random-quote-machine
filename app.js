const newQuoteButton = document.querySelector('#new-quote')
newQuoteButton.addEventListener('click', fetchRandomQuote)

async function fetchRandomQuote() {
  const response = await fetch('https://api.quotable.io/random')
  const quoteObject = await response.json()
  renderQuote(quoteObject)
  renderAuthor(quoteObject)
}

function renderQuote(quoteObject) {
  const textElement = document.querySelector('#text')
  textElement.textContent = quoteObject.content
}

function renderAuthor(quoteObject) {
  const textElement = document.querySelector('#author')
  textElement.textContent = `- ${quoteObject.author}`
}
