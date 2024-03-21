var  arrayOfQuotes = [
    {"author": "Jim Rohn", 
     "quote": "Beware of what you become in pursuit of what you want."
    },
    {"author": "William W. Purkey", 
     "quote": "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth."
    },
    {"author": "Dr. Seuss", 
     "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    },
    {"author": "Mae West", 
     "quote": "You only live once, but if you do it right, once is enough."
    },
    {"author": "Wayne Gretzy", 
     "quote": "You miss 100% of the shots you don\"t take."
    },
    {"author": "Nelson Mandela", 
     "quote": "Resentment is like drinking poison and waiting for your enemies to die."
    },
    {"author": "Elbert Hubbard", 
     "quote": "Do not take life too seriously. You will not get out alive."
    },
    {"author": "Oscar Wilde", 
     "quote": "Be yourself; everyone else is already taken."
    },
    {"author": "Marilyn Monroe", 
     "quote": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {"author": "Frank Zappa", 
     "quote": "So many books, so little time."
    },
    {"author": "Albert Einstein", 
     "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {"author": "Bernard M. Baruch", 
     "quote": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    },
];

function randomQuote()
{
var numbers = [];
var m;
do {
    m= Math.floor(Math.random()*arrayOfQuotes.length);
} while (numbers.includes(m));
numbers.push(m);     
document.getElementById("quote").innerHTML = `"${arrayOfQuotes[m].quote}"`;
document.getElementById("author").innerHTML = `--${arrayOfQuotes[m].author}`;
}