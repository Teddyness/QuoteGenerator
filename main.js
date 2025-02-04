const btnElement = document.getElementById("btn");
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

const apiURL = "https://api.realinspire.tech/v1/quotes/random";

const getQuote= async ()=>{
    try {
        quoteElement.innerText = "Fetching Inspiration..."
        authorElement.innerText = "Author..."
        btnElement.innerText = `Loading...`;
        btnElement.disabled = true;
        const response = await fetch(apiURL);
        const data = await response.json();
        // console.log(data);
        const content = data[0].content
        const author = data[0].author;
        quoteElement.innerText = content;
        authorElement.innerText = `~ ${author}`;  
        btnElement.disabled = false;
        btnElement.innerText =  `Get Motivation`;
    } catch (error) {
        quoteElement.innerText = `Programming is the only escape from part-time jobs!`;
        authorElement.innerText = `~ Common Sense!`;
        btnElement.disabled = true;
        btnElement.innerText = `Refresh Page...`
    }
}

btnElement.addEventListener("click", getQuote);

