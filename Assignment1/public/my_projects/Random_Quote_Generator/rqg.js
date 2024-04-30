function generate() {
  var quotes = {
    " - Eliud Kipchoge":
      "Only the disciplined ones in life are free. If you are undisciplined, you are a slave to your moods and your passions",

    " - Albert Schweitzer":
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful",

    " - Robert Collier":
      "Success is the sum of small efforts - repeated day in and day out",

    " - Aristotle": "The law is reason, free from passion",

    " - Muhammad Ali":
      "I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want",

    " - Bob Marley": "None but ourselves can free our minds",
  };

  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
