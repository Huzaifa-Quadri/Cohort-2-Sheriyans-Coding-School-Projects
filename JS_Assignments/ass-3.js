// 1.
// function sayhello() {
//   console.log("I am saying HEllo to JS");
// }
// sayhello();

// 2.
// function add(a, b) {
//   return a + b;
// }
// console.log(add(22, 53));

//3.
// function greeting(greet = "Namaste") {
//   console.log(greet);
// }
// greeting();

// 4.
function addAll(...a) {
  let sum = 0;
  //   for (let i = 0; i < a.length; i++) {
  //     sum += a[i];
  //   }

  //? OR -  using forEach

  //   a.forEach(function (val) {
  //     sum += val;
  //   });

  //? OR - using reduce function

  sum = a.reduce(function (acc, val) {
    return acc + val;
  }, 0); //Setting default/first value of accumulator as 0

  return sum;
}

// console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//5.
// (function () {
//   console.log("This is a IIFE");
// })();

//6.
// function outer(arg = 12) {
//   function inner() {
//     console.log(arg);
//   }
//   inner();
// }

// outer();

//7.
// let fruit = ["apple", "mango", "strawberry", "berries", "pear"];

// fruit.push("orage");
// console.log(fruit);
// fruit.

//8.
// let obj = {
//   name: "Hi",
//   age: 24,
//   hobby: "gaming",
// };

// for (let key in obj) {
//   console.log(key);
// }

//9.

//10.
