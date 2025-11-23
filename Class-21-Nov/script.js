let h1 = document.querySelector("main h1");

var aud = new Audio("./keysounds/1.mp3");

let sounds = [];
for (let i = 1; i <= 32; i++) {
  sounds[i] = new Audio(`./keysounds/${i}.mp3`);
}
console.log(sounds);

// const char = "b";
// const asciiValue = char.charCodeAt(0);
// console.log(`The ASCII value of '${char}' is: ${asciiValue}`);
// console.log("Here is character = ", String.fromCharCode(9));

document.body.addEventListener("keydown", function (dets) {
  //   console.log(dets.key);
  // h1.innerHTML = dets.key;

  // let keypressed = dets.key.charCodeAt(0) - 96;
  // if (keypressed < 33 && keypressed > 0) {
  //   console.log(keypressed);
  //   sounds[dets.key.charCodeAt(0) - 96].play();
  // }

  //? Improvements
  let keypressed = dets.key.toLowerCase();
  h1.innerHTML = keypressed.key;
  let keyIndex = keypressed.charCodeAt(0) - 96;
  if (keyIndex > 0 && keyIndex < 34) {
    let currentsound = sounds[keyIndex];
    currentsound.currentTime = 0;
    currentsound.play();
  }
});

// let asc = 97;
// for (let i = 1; i <= 26; i++) {
//   console.log(String.fromCharCode(asc));
//   asc++;
// }
