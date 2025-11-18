main = document.querySelector("main");

var pbtn = document.querySelector("button");

pbtn.addEventListener("mousemove", function () {
  var d = document.createElement("div");
  d.style.height = "50px";
  d.style.width = "50px";

  var num1 = Math.random() * 100;
  var num2 = Math.random() * 100;
  var rot = Math.random() * 100;
  var sc = Math.random() * 3;

  var c1 = Math.floor(Math.random() * 256);
  var c2 = Math.floor(Math.random() * 256);
  var c3 = Math.floor(Math.random() * 256);

  d.style.position = "absolute";
  d.style.left = num1 + "%";
  d.style.top = num2 + "%";
  d.style.rotate = rot + "deg";
  d.style.scale = sc;
  d.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

  //   console.log(num1, num2);
  main.appendChild(d);
});
