// List of quotes on Education that will be cycled through on repeat, just on main page


const quotes = [
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
  },
  {
    text: "The function of education is to teach one to think intensively and to think critically.",
    author: "Martin Luther King Jr."
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    text: "The roots of education are bitter, but the fruit is sweet.",
    author: "Aristotle"
  },
  {
    text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle"
  },
  {
    text: "Education is not the filling of a pail, but the lighting of a fire.",
    author: "William Butler Yeats"
  },
  {
    text: "Develop a passion for learning. If you do, you will never cease to grow.",
    author: "Anthony J. D'Angelo"
  },
  {
    text: "The aim of education is the knowledge, not of facts, but of values.",
    author: "William S. Burroughs"
  },
  {
    text: "A person who won't read has no advantage over one who can't read.",
    author: "Mark Twain"
  },
  {
    text: "Teaching is the one profession that creates all other professions.",
    author: "Unknown"
  }
];


let currentIndex = 0; // starting quote will always be Nelson Mandela

function showNextQuote() {
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");

  if (!quoteText || !quoteAuthor) {
    console.error("Missing quote-text or quote-author element.");
    return;
  }

  quoteText.style.opacity = 0; //allows text to fade in and out with 0 and 1 opacity, 0 being invisible and 1 visible. Interacts with css.
  quoteAuthor.style.opacity = 0;

  setTimeout(() => {
    const { text, author } = quotes[currentIndex];
    quoteText.textContent = `"${text}"`; //changes the text in the quote
    quoteAuthor.textContent = `— ${author}`; // changes the author to match the quote being shown based on the map
    quoteText.style.opacity = 1;
    quoteAuthor.style.opacity = 1;

    currentIndex = (currentIndex + 1) % quotes.length; // This will provide the cycle with fading in and out
  }, 500);
}

// This ensures that quote js only runs once page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  showNextQuote();
  setInterval(showNextQuote, 5000);
});
