// ===== 🧠 VERGIL QUOTES SCRIPT =====
const quotes = [
  "I need more power...",
  "Foolishness, Dante. Foolishness.",
  "Might controls everything.",
  "I am the storm that is approaching.",
  "You shall die.",
  "The past is a gaping hole.",
  "You are not worthy as my opponent.",
  "If you want it, then you'll have to take it.",
  "Yamato... the blade that will cut through all.",
];

const quoteBox = document.getElementById("vergil-quote");

function showQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.textContent = quote;
  quoteBox.style.opacity = 1;

  setTimeout(() => {
    quoteBox.style.opacity = 0;
  }, 4000); // visible for 4 seconds
}

setInterval(showQuote, 8000); // new quote every 8 seconds
