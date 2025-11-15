let btn = document.querySelector(".add");

console.log("Running js");
let card = document.querySelector(".card");
let stat = document.querySelector("p");
let check = 0;
btn.addEventListener("click", function () {
  //   let ran = Math.floor(Math.random() * 500);
  //   console.log(ran);

  if (check === 0) {
    stat.innerHTML = "Friend";
    stat.style.color = "rgb(3, 255, 3)";
    btn.style.backgroundColor = "red";
    btn.innerHTML = "Remove";
    btn.style.color = "white";
    check = 1;
  } else {
    stat.innerHTML = "Stranger";
    stat.style.color = "white";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "rgb(3, 255, 3)";
    btn.style.color = "black";
    check = 0;
  }
});

// let cc = document.querySelector(".card");
// document.addEventListener("mousemove", function () {
//   let c1 = Math.floor(Math.random() * 256);
//   let c2 = Math.floor(Math.random() * 256);
//   let c3 = Math.floor(Math.random() * 256);

//   card.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
//   console.log(`rgb(${c1},${c2},${c3})`);
// });

//*         proj - 3
let main = document.querySelector(".box");
let cursr = document.querySelector(".cursor");
let h1 = document.querySelector("h1");
console.log("Running Proj3");

main.addEventListener("mousemove", function (dot) {
  //   console.log(dot.x); //? same as dot.screenX

  cursr.style.left = dot.x - 10 + "px";
  cursr.style.top = dot.y - 10 + "px";
});

h1.addEventListener("mouseenter", function () {
  cursr.style.backgroundColor = "blue";
});

h1.addEventListener("mouseleave", function () {
  cursr.style.backgroundColor = "red";
});
