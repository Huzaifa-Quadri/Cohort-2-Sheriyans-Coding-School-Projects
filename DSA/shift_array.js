var arr = [1, 2, 3, 4, 5, 6];
var s = 1;
var e = arr.length - 1;
console.log(arr);

while (s < e) {
  var temp = arr[s];
  arr[s] = arr[e];
  arr[e] = temp;
  s++;
  e--;
}
s = 0;
e = arr.length - 1;

while (s < e) {
  var temp = arr[s];
  arr[s] = arr[e];
  arr[e] = temp;
  s++;
  e--;
}

console.log(arr);
