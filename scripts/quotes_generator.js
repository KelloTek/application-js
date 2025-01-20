const quotes = [
    { text: "Life is like a bicycle: you have to keep moving to keep your balance.", author: "Albert Einstein" },
    { text: "Success is falling down seven times, getting back up eight.", author: "Proverbe japonais" },
    { text: "There's only one way to fail, and that's to give up before you've succeeded.", author: "Georges Clemenceau" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Everything seems impossible until you do it.", author: "Nelson Mandela" },
    { text: "Make haste slowly, without losing heart.", author: "Jean de La Fontaine" }
]

const quoteContainer = document.getElementById("quote")
const authorContaienr = document.getElementById("author")
const newQuoteButton = document.getElementById("new-quote")

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomIndex]
    quoteContainer.textContent = `${quote.text}`
    authorContaienr.textContent = `- ${quote.author}`
}

newQuoteButton.addEventListener("click", generateQuote)

generateQuote()