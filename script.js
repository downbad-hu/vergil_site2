// ========== 🎧 AUDIO TOGGLE ==========
const audio = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");
const volumeIcon = document.getElementById("volume-icon");

let isMuted = false;

// Unmute on first interaction
window.addEventListener("click", () => {
  if (audio.paused) audio.play();
});

muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  audio.muted = isMuted;
  volumeIcon.src = isMuted ? "assets/volume-off.png" : "assets/volume-on.png";
});


// ========== 🌗 THEME TOGGLE ==========
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  themeIcon.src = isLight ? "assets/sun.png" : "assets/moon.png";
});


// ========== 🖼️ SLIDESHOW ==========
const slides = [
  "assets/vergil.jpg",
  "assets/dante.jpg",
  "assets/judgement.jpg"
];
let slideIndex = 0;
const slideImg = document.getElementById("slide");

setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  slideImg.src = slides[slideIndex];
}, 3000);


// ========== 🧠 VERGIL QUOTES (Optional) ==========
const quotes = [
  "I need more power...",
  "Might controls everything.",
  "Foolishness, Dante. Foolishness.",
  "I am the storm that is approaching.",
  "This is the path I have chosen."
];
const quoteBox = document.getElementById("vergil-quote");

function showRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.textContent = quote;
  quoteBox.style.opacity = 1;

  setTimeout(() => {
    quoteBox.style.opacity = 0;
  }, 4000);
}

// Show a new quote every 8s
setInterval(showRandomQuote, 8000);


// ========== ⚔️ SWORD CURSOR TRAIL ==========
const trailCount = 20;
const trail = [];

for (let i = 0; i < trailCount; i++) {
  const dot = document.createElement("div");
  dot.className = "cursor-trail";
  document.body.appendChild(dot);
  trail.push({ x: 0, y: 0, el: dot });
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateTrail() {
  let x = mouseX;
  let y = mouseY;

  trail.forEach((dot, i) => {
    const next = trail[i + 1] || trail[0];
    dot.x += (x - dot.x) * 0.2;
    dot.y += (y - dot.y) * 0.2;
    dot.el.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
    dot.el.style.opacity = `${1 - i / trailCount}`;
    x = dot.x;
    y = dot.y;
  });

  requestAnimationFrame(animateTrail);
}

animateTrail();
