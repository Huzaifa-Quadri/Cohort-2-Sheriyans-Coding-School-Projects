const elements = document.querySelectorAll(".matrix-effect");
const Characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

elements.forEach((element) => {
  let text = element.innerText;
  let itr = 0;
  let interval; //just for clear interval

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
    element.innerText = str;
  }

  element.addEventListener("mouseenter", () => {
    itr = 0;
    interval = setInterval(() => {
      randomText();
    }, 30);
  });

  element.addEventListener("mouseleave", () => {
    clearInterval(interval);
    element.innerText = text;
  });
});
