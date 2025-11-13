// let arr = [2, 33, 4, 2, 55, 7, 2];
// console.log(arr);
// console.log("Hello I am learning this in sherieyans coding school!!");

// let arr2 = arr;
// console.log(typeof arr2);
// let newArr = [10, 20, 30, 40, 50, 60, 70];
// let [a, , , b] = newArr;
// console.log(a, b);

// let arr3 = newArr.filter((val) => val + 3 > 30);

// console.log(arr3);

// console.log("Understanding shift and unshift functions of arrays :");
// let arr4 = [2, 3, 4, 5];
// arr4.shift();
// console.log(arr4);
// arr4.shift();
// console.log(arr4);
// arr4.shift();
// console.log(arr4);

// arr4.unshift(33, 25);
// console.log(arr4);

// arr4.forEach((val) => console.log(val));

//* Level 2
// 1.
// function runTwice(fn) {
//   fn();
//   fn();
// }

// //? Calling the function and sending another function as argument(maling it higer order function)
// runTwice(function fn() {
//   console.log("Calling Function in higher order function");
// });

//3.
// function destructure({ name, age }) {
//   console.log(name, age);
// }

// destructure({ name: "Huza", age: 32 });

//TODO -> 4.
// let obj = {

// }

//5.
// let rr = [2, 4, 6, 8, 95];
// let rr2 = rr.map(function (val) {
//   return val * val;
// });
// console.log(rr2);

//6.
// let rr3 = [1, 2, 3, 4, 5, 56, 6, 63, 7];
// let rr4 = rr3.filter((val) => val % 2 == 0);
// console.log(rr4);

//7.
let salary = [10000, 40000, 4500];
let sal = salary.reduce(function (acc, val) {
  return acc + val;
}, 0);

console.log(sal);
