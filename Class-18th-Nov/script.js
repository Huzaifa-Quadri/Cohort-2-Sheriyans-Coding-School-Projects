var b = document.querySelector("button");
var bar = document.querySelector(".inner-bar");
var download = document.querySelector("h2");
var grow = 0;
b.addEventListener("click", () => {
  var interval = 50 + Math.floor(Math.random() * 50);
  console.log("Your file will be downloaded in", interval / 10, "seconds");
  // grow = 0;
  b.style.pointerEvents = "none";

  const int = setInterval(() => {
    grow++;
    download.innerHTML = grow;
    bar.style.width = grow + "%";

    //? Method 2 : If else Method
    if (grow >= 100) {
      clearInterval(int);
      b.style.opacity = 0.7;
      b.textContent = "Downloaded";
      b.style.color = "rgb(0, 255, 0)";
    }
  }, interval);

  //? Method 1 : SetTimeout
  // setTimeout(() => {
  //   b.style.opacity = 0.7;
  //   b.innerHTML = "Downloaded";
  //   b.style.color = "rgb(0, 255, 0)";
  //   clearInterval(int);
  // }, interval * 100);

  console.log("File will be downloaded in", interval / 10, "s");
});
