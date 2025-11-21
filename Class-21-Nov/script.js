let h1 = document.querySelector("h1");

document.body.addEventListener("keydown", function (dets) {
  // alert('Body clicked!');

  //   console.log(dets.key);
  h1.innerHTML = dets.key;
});
