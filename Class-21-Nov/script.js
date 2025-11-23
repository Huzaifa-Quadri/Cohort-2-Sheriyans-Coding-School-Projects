let h1 = document.querySelector("main h1");

var aud = new Audio("./keysounds/1.mp3");

let sounds = [];
for (let i = 1; i <= 32; i++) {
  sounds[i] = new Audio(`./keysounds/${i}.mp3`);
}
console.log(sounds);

document.addEventListener("keydown", function (dets) {
  let keypressed = dets.key.toLowerCase();
  h1.innerHTML = keypressed;
  let keyIndex = keypressed.charCodeAt(0) - 96;
  if (keyIndex > 0 && keyIndex < 34) {
    let currentsound = sounds[keyIndex];
    currentsound.currentTime = 0;
    currentsound.play();

    let visualKey = document.querySelector(`.key[data-key="${keypressed}"]`);

    if (visualKey) {
      visualKey.classList.add("playing"); // adding css class to Make it glow on click
      // And Remove glow after 100ms
      setTimeout(() => {
        visualKey.classList.remove("playing");
      }, 100);
    }
  }
});

// const char = "b";
// const asciiValue = char.charCodeAt(0);
// console.log(`The ASCII value of '${char}' is: ${asciiValue}`);
// console.log("Here is character = ", String.fromCharCode(9));

// let asc = 97;
// for (let i = 1; i <= 26; i++) {
//   console.log(String.fromCharCode(asc));
//   asc++;
// }
