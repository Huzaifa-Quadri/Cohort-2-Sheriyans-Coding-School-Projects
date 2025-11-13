let obj = {
  name: "Huz",
  email: "hhatdj@jdj.so",
  age: 23,
};

console.log(typeof obj);
console.log(obj);

let nested = {
  name: "Huzaifa",
  inner: {
    innerName: "Quadri",
    hobby: "Gaming",
  },
  age: "22",
  galaxy: "milkyway",
};

console.log(nested.name);
console.log(nested.age);
console.log(nested.inner.innerName);
console.log(nested.inner);

delete nested.inner;
console.log(nested.inner);
