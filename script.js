console.log("JavaScript loaded!");

// const slider = document.querySelector("section");
// console.log("Element Selected");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", (e) => {
//   console.log("Sliderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
//   slider.style.cursor = "grabbing";
//   e.preventDefault(); // Prevents text selection
// });

// console.log("Sliderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr Left");
// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
//   slider.style.cursor = "grab";
// });

// slider.addEventListener("mouseup", () => {
//   console.log("Sliderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr Up");
//   isDown = false;
//   slider.classList.remove("active");
//   slider.style.cursor = "grab";
// });

// console.log("Sliderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr idk");
// slider.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 1.5; // Scroll speed
//   slider.scrollLeft = scrollLeft - walk;
// });

// console.log(
//   "Sliderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr GONEEEEEEEE"
// );

const sliders = document.querySelectorAll("section");

sliders.forEach((slider) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    // Only left click (button 0)
    if (e.button !== 0) return;

    isDown = true;
    // Get mouse X relative to slider container
    startX = e.clientX - slider.getBoundingClientRect().left;
    scrollLeft = slider.scrollLeft;

    slider.style.cursor = "grabbing";
    e.preventDefault(); // Prevent text selection
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.clientX - slider.getBoundingClientRect().left;

    const walk = (x - startX) * 1; // scroll speed multiplier
    slider.scrollLeft = scrollLeft - walk;
  });
});
