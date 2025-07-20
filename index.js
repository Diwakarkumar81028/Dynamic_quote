
const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Push yourself, because no one else is going to do it for you. – Unknown",
  "It always seems impossible until it's done. – Nelson Mandela",
  "Fall seven times, stand up eight. – Japanese Proverb",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "Dream big and dare to fail. – Norman Vaughan",
  "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "Great things never come from comfort zones. – Unknown",
  "Work hard in silence, let your success make the noise. – Frank Ocean",
  "Don’t limit your challenges. Challenge your limits. – Jerry Dunn",
  "The future depends on what you do today. – Mahatma Gandhi",
  "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
  "Strive for progress, not perfection. – Unknown",
  "Doubt kills more dreams than failure ever will. – Suzy Kassem",
  "Act as if what you do makes a difference. It does. – William James",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis"
];

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "indigo",
  "violet",
  "gold",
  "silver",
  "maroon"
];

function change(){
    let idx1=Math.floor(Math.random()*20);
    let idx2=Math.floor(Math.random()*20);

  const body=document.querySelector("body");
  body.style.backgroundColor=`${colors[idx1]}`;
   
    const parent=document.getElementById("box");
    parent.innerHTML="";
    const ele=document.createElement("h2");
    ele.innerHTML=`${quotes[idx2]}`;
    parent.appendChild(ele);
    parent.style.backgroundColor=`${colors[idx2]}`;
}

setInterval(change,4000);