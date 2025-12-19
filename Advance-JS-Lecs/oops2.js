class Sketch {
  constructor() {
    //Whats Written inside constructor goes into its own memory rather than shared
    console.log("Constructor called");
    this.color = "red";
    this.size = 300;
    this.func = function () {
      console.log("Sketch Class's Function inside constructor");
    };
  }

  //Whatever we write outside of function goes into prototype
  //prototype is shared across all instances - shared memory
  draw() {
    console.log("draw");
  }

  look() {
    console.log("Looking at Sketch");
  }

  stop = 1;
}
const s1 = new Sketch();
s1.look();
console.log(s1.stop);
s1.func();
