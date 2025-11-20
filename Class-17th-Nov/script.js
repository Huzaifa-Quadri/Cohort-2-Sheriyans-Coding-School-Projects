main = document.querySelector("main");

var pbtn = document.querySelector("button");
var border = ["dashed", "dotted", "hidden", "solid", "double", "groove"];
pbtn.addEventListener("mousemove", function () {
  var d = document.createElement("div");
  d.style.height = "50px";
  d.style.width = "50px";

  var num1 = Math.random() * 100;
  var num2 = Math.random() * 100;
  var rot = Math.random() * 100;
  var sc = Math.random() * 3;
  var b = Math.random() * 10;
  var index = Math.floor(Math.random() * 6);

  var c1 = Math.floor(Math.random() * 256);
  var c2 = Math.floor(Math.random() * 256);
  var c3 = Math.floor(Math.random() * 256);

  var bc1 = Math.floor(Math.random() * 256);
  var bc2 = Math.floor(Math.random() * 256);
  var bc3 = Math.floor(Math.random() * 256);

  var t = 500 + Math.random() * 15000;

  d.style.position = "absolute";
  d.style.left = num1 + "%";
  d.style.top = num2 + "%";
  d.style.rotate = rot + "deg";
  d.style.scale = sc;
  d.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  d.style.border = `${b}px ${border[index]} rgb(${bc1},${bc2},${bc3})`;

  main.appendChild(d);

  //? For Boxes to disappear at random time
  setTimeout(() => {
    d.remove();
  }, t);
});
