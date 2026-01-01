localStorage.clear();
localStorage.setItem("name", "huz");
localStorage.setItem("age", "22");

var item = localStorage.getItem("name");
console.log(item);

// localStorage.removeItem("age");

localStorage.setItem("realObject", JSON.stringify({ name: "huz", age: 22 }));
