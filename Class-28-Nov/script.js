let p = document.querySelector("p");
const h1 = document.querySelector("h1");
let text = p.innerText;
console.log(text);
const Characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// let iteration = 0;
let itr = 0;
function randomText() {
  const str = text
    .split("")
    .map((char, ind) => {
      if (ind < itr) {
        return char;
      }
      return Characters.split("")[
        Math.floor(Math.random() * Characters.length)
      ];
    })
    .join("");

  itr += 0.25;
  // console.log(itr);
  p.innerText = str;
}
let interval;

p.addEventListener("mouseenter", () => {
  itr = 0;
  interval = setInterval(() => {
    randomText();
  }, 30);
});

p.addEventListener("mouseleave", () => {
  clearInterval(interval);
  p.innerText = text;
});
