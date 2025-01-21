const quoteContainer = document.getElementById("quote")
const newQuoteButton = document.getElementById("new-quote")

async function fetchRandomQuote() {
    try {
        const response = await fetch("https://corsproxy.io/?url=https://zenquotes.io/api/random")
        let data = await response.json()
            
        quoteContainer.textContent = `${data[0].q} - ${data[0].a}`
    } catch(error) {
        console.log("Error: ", error)
    }
}

newQuoteButton.addEventListener("click", async()=> await fetchRandomQuote())

fetchRandomQuote()