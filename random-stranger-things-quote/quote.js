async function getRandomQuote() {
    const response = await fetch("https://strangerthings-quotes.vercel.app/api/quotes");
    const randomQuote = await response.json();
    return randomQuote;
}

async function randomizeQuote() {
    const quote = document.querySelector("blockquote");
    const author = document.querySelector("figcaption");
    const [randomQuote] = await getRandomQuote();
    quote.textContent = randomQuote.quote;
    author.textContent = randomQuote.author;
}

window.addEventListener("load", randomizeQuote);

const randomizeButton = document.querySelector("button");
randomizeButton.addEventListener("click", randomizeQuote);
