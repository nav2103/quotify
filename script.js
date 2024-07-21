const apiUrl = "https://api.breakingbadquotes.xyz/v1/quotes";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();

  console.log(data);

  quote.innerHTML = data[0].quote;
  author.innerHTML = data[0].author;
}

getQuote(apiUrl);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ----by " +
      author.innerHTML,
    "Tweet Window",
    "width=500",
    "height=300"
  );
}
