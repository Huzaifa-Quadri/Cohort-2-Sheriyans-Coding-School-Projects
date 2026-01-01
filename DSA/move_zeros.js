let arr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
console.log(arr);

var len = arr.length;
console.log("Length before code :", len);
var i = 0;
var count = 0;
while (i < arr.length) {
  if (arr[i] === 1) {
    count++;
  }
  i++;
}
console.log("Ones:", count);

var j = 0;
while (j < count) {
  arr[j] = 1;
  j++;
}
let zeros = len - count;
while (zeros > 0) {
  arr[j++] = 0;
  zeros--;
}

console.log("Ascended :", arr);
console.log("Length after code :", arr.length);

//Normal with extra space

// let brr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 1) {
//     brr.push(arr[i]);
//   }
// }

// let zeros = arr.length - brr.length;
// for (let i = 0; i < zeros; i++) {
//   brr.push(0);
// }
// console.log(brr);
