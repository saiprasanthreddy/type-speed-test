const quotes = [
  "JavaScript is a versatile language.",
  "Typing fast is a useful skill.",
  "Practice makes perfect.",
  "Keep improving every day!",
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Java is to JavaScript what car is to carpet.",
  "Experience is the name everyone gives to their mistakes.",
  "In order to be irreplaceable, one must always be different.",
  "Talk is cheap. Show me the code.",
  "Simplicity is the soul of efficiency.",
  "Before software can be reusable it first has to be usable.",
  "Make it work, make it right, make it fast.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The future depends on what you do today.",
  "The only way to do great work is to love what you do.",
  "You are never too old to set another goal or to dream a new dream.",
  "Believe you can and you’re halfway there.",
  "Start where you are. Use what you have. Do what you can.",
  "Push yourself, because no one else is going to do it for you.",
  "It always seems impossible until it’s done.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "May the Force be with you.",
  "I’ll be back.",
  "Why so serious?",
  "Life is like a box of chocolates. You never know what you're gonna get.",
  "Just keep swimming.",
  "I'm the king of the world!",
  "Houston, we have a problem.",
  "I am Iron Man.",
  "You shall not pass!",
  "It’s not who I am underneath, but what I do that defines me.",
  "The question is not whether intelligent machines can have any emotions, but whether machines can be intelligent without any emotions.",
  "Artificial intelligence is the new electricity.",
  "The real question is, when will we draft an artificial intelligence bill of rights?",
  "Machine learning is the last invention that humanity will ever need to make.",
  "AI is neither good nor evil. It’s a tool. It’s a technology for us to use.",
  "Technology is best when it brings people together.",
  "Computers are good at following instructions, but not at reading your mind.",
  "Automation is no longer a thing of the future. It is the present.",
  "We are changing the world with technology.",
  "Software is eating the world.",
];

let currentQuote = "";
let timer = 0;
let interval = null;
let started = false;

const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");

function setQuote() {
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = currentQuote;
  inputEl.value = "";
  inputEl.focus();
  timer = 0;
  timeEl.textContent = "0";
  wpmEl.textContent = "0";
  started = false;
  inputEl.className = "";
  clearInterval(interval);
}

inputEl.addEventListener("input", () => {
  const text = inputEl.value;

  // Start timer on first input
  if (!started && text.length > 0) {
    started = true;
    interval = setInterval(() => {
      timer++;
      timeEl.textContent = timer;
      updateLiveWPM();
    }, 1000);
  }

  // Color feedback
  if (currentQuote.startsWith(text)) {
    inputEl.className = "correct";
  } else {
    inputEl.className = "incorrect";
  }

  // Finished typing
  if (text === currentQuote) {
    clearInterval(interval);
    inputEl.className = "correct";
    updateLiveWPM();
  }
});

function updateLiveWPM() {
  const words = inputEl.value
    .trim()
    .split(" ")
    .filter((w) => w).length;
  const wpm = Math.round((words / timer) * 60);
  wpmEl.textContent = isFinite(wpm) ? wpm : 0;
}

function resetTest() {
  setQuote();
}

setQuote();
