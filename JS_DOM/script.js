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

//project 4

// let sect = document.querySelectorAll(".sect1");
// let sectImg = document.querySelector(".sect1 img");

// sect.addEventListener("mousemove", function (dets) {
//   // console.log(dets.x);
//   sectImg.style.left = dets.x + "px";
//   sectImg.style.top = dets.y + "px";
// });

// sect.addEventListener("mouseenter", function (dets) {
//   sectImg.style.opacity = 1;
// });

// sect.addEventListener("mouseleave", function (dets) {
//   sectImg.style.opacity = 0;
// });
let sect = document.querySelectorAll(".bar");

sect.forEach(function (e) {
  console.log(e.childNodes);
  // let img = e.childNodes[3];
  let img = e.querySelector("img");
  let title = e.querySelector("h1");

  e.addEventListener("mouseenter", function () {
    // console.log("Entered");
    title.style.color = "white";
    img.style.opacity = 1;
    // e.style.backgroundColor = "blue";
  });
  e.addEventListener("mouseleave", function () {
    // console.log("Left");
    img.style.opacity = 0;
    title.style.color = "orange";
    // e.style.backgroundColor = "rgb(24, 24, 24)";
  });

  e.addEventListener("mousemove", function (dets) {
    const x = dets.offsetX;
    const y = dets.offsetY;

    img.style.top = y + "px";
    img.style.left = x + "px";
  });
});
