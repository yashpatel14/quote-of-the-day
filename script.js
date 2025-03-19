const API_URL = "https://api.freeapi.app/api/v1/public/quotes/quote/random";


async function fetchQuote() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const quote = data.data.content;
        const author = data.data.author || "Unknown";

        document.getElementById("quote-text").innerText = `"${quote}"`;
        document.getElementById("quote-author").innerText = `- ${author}`;

        setRandomBackground();
    } catch (error) {
        document.getElementById("quote-text").innerText = "Failed to load quote.";
        console.error(error);
    }
}


function copyToClipboard() {
    const text = document.getElementById("quote-text").innerText + "\n" + document.getElementById("quote-author").innerText;
    navigator.clipboard.writeText(text);
    alert("Quote copied to clipboard!");
}

function shareOnTwitter() {
    const text = document.getElementById("quote-text").innerText + " " + document.getElementById("quote-author").innerText;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
}

function setRandomBackground() {
    
    const randomImage = `https://picsum.photos/1600/900?random=${new Date().getTime()}`;
    document.body.style.backgroundImage = `url('${randomImage}')`;
}

function downloadQuote() {
    const quoteBox = document.getElementById("quote-box");

    html2canvas(quoteBox).then(canvas => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "quote.png";
        link.click();
    });
}

fetchQuote();
