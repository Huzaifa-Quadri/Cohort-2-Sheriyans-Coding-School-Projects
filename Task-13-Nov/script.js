var count = document.querySelector("h1");
console.log(count);

var plus = document.querySelector("#inc");
var minus = document.querySelector("#dec");

let num = Number(count.innerText); //OR(better) let num = Number(count.innerHTML) || 0;

plus.addEventListener("click", function () {
  num++;
  count.innerHTML = num;
});

minus.addEventListener("click", function () {
  num--;
  count.innerHTML = num;
});
