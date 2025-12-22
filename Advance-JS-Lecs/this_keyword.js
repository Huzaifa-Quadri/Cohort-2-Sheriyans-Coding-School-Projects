// 'This' keyword
// 1. Inside Global -> Window Object
console.log("Global this ------->", this);

//2. Indide ES5 fn -> Global Object
function fn() {
  console.log("Normal ES5 function ------->", this);
}
fn();

//3. Inside ES6 fn -> undefined
(() => {
  console.log("Arrow function ------->", this);
})();

//4. Inside ES5 fn in an Object -> Object
obj = {
  id: 1,
  fn: function () {
    console.log("ES5 function in a Object ------->", this);
  },
};
obj.fn();

//5. Inside ES6 fn in an Object -> Window
obj2 = {
  id: 2,
  fn: () => {
    console.log("ES6 function in a Object ------->", this);
  },
};
obj2.fn();

//6. Inside ES5 fn inside ES5 function inside object -> Window
obj3 = {
  id: 3,
  fn: function () {
    function innerFn() {
      console.log("Inner function ------->", this);
    }
    innerFn();
  },
};
obj3.fn();

//7. Inside Event Listener of element -> Element/Tag
let h1 = document.querySelector("h1");
h1.addEventListener("mouseenter", function () {
  console.log("This on Event Listener of element ------->", this);
});


// -----------------------------------------------------------------------------------

//* Bind - Function bind method doesn't call the function 

//? Ek function me this ki value window hota hai, agr aap chahte ho ki wo value window na ho to hum use karte hai call apply bind ka 

let objs = {
  name : "Huz"
}

function sample(a,b,c){
  console.log(this);
}
// sample(); //Normal Calling fn -> Window

//* With Call
// sample.call(objs); //? Passing object reference -> Object

//We can also send parameters
sample.call("This keyword with call ----->",objs,1,2,3); //first objs and then arguments

//* With Bind

//? Bind doesnt directly run function, but a new function which we have to save
let newFn = sample.bind(objs);
console.log("This keyword with bind ----->");

newFn();