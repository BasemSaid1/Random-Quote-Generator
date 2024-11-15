var quoteList = [
  {
    quote: `"Resentment is like drinking poison and waiting for your enemies to die."`,
    auther: `--Nelson Mandela`,
  },
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    auther: `--Oscar Wilde`,
  },
  {
    quote: `“So many books, so little time.”`,
    auther: `--Frank Zappa`,
  },
  {
    quote: `“A room without books is like a body without a soul.”`,
    auther: `--Marcus Tullius Cicero`,
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    auther: `--Mae West`,
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    auther: `--Mahatma Gandhi`,
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    auther: `--Mahatma Gandhi`,
  },
];

function addclick() {
  var x = Math.floor(Math.random() * quoteList.length);
  console.log(x);

  document.getElementById("quote1Output").innerHTML = `${quoteList[x].quote}`;
  document.getElementById("quote2Output").innerHTML = `${quoteList[x].auther}`;
}
