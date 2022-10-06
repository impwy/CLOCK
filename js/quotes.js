const quotes = [
    {
        quotes:"I never dreamed about success, I worked for it.",
        author: "Estee Lauder",
    },
    {
        quotes:"Do not try to be original, just try to be good.",
        author: "Paul Rand",
    },
    {
        quotes:"Do not be afraid to give up the good to go for the great.",
        author: "John D.Rockefeller",
    },
    {
        quotes:"If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
        author: "Martin Luther King Jr.",
    },
    {
        quotes:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author: "Thomas Edison",
    },
    {
        quotes:"The fastest way to change yourself is to hang out with people who are already the way you want to be.",
        author: "Reid Hoffman",
    },
    {
        quotes:"Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you 're not doing a tour of gas stations.",
        author: "Tim O'Reilly",
    },
    
    {
        quotes:"Some people dream of success, while other people get up every morning and make it happen.",
        author: "Wayne Huizenga",
    },  
    {
        quotes:"Some people dream of success, while other people get up every morning and make it happen.",
        author: "Wayne Huizenga",
    },  
    {
        quotes:"Some people dream of success, while other people get up every morning and make it happen.",
        author: "Wayne Huizenga",
    },  
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;