console.log("Hello");

let board = document.querySelector("main .piano-container");

for (let i = 1; i < 27; i++) {
  const card = document.createElement("div");
  card.className = "key";

  let char = String.fromCharCode(i + 96);
  console.log(char);

  card.innerHTML = char;

  card.setAttribute("data-key", char);

  board.appendChild(card);
}
