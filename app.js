let quotes =[
    '“Be yourself; everyone else is already taken.” ― Oscar Wilde' ,
    '“Be the change that you wish to see in the world.”― Mahatma Gandhi' ,
    "“I have not failed. I've just found 10,000 ways that won't work.”― Thomas A. Edison" ,
    '“It is never too late to be what you might have been.”― George Eliot' ,
    '“Everything you can imagine is real.”― Pablo Picasso' ,
    "“Life isn't about finding yourself. Life is about creating yourself.”― George Bernard Shaw" ,
    "“Do what you can, with what you have, where you are.”― Theodore Roosevelt" ,
    "“It’s no use going back to yesterday, because I was a different person then.”― Lewis Carroll" ,
    "“It's the possibility of having a dream come true that makes life interesting.”― Paulo Coelho" ,
    "“Nothing is impossible, the word itself says 'I'm possible'!”― Audrey Hepburn"


]
let quotePara=document.getElementById("quotes");
let btn = document.getElementById("generate");
onclick = ()=>{
    let randomQuote =Math.floor(Math.random() * quotes.length);
    quotePara.textContent = quotes[randomQuote]
}