/*
* Destrcuturing
* Spread Operator - Deep Copy

? Arrays - 
var arr = [1,2,3,4,54,56];
var arr2 = [...arr];

console.log(arr);
console.log(arr2);

arr2.pop();
arr2.pop();
arr2.pop();

console.log(arr);
console.log(arr2);


var arr = ["Hmm","Nutz","Ohh","Well","Khote","Jazz","Huh","Fish","Skadoosh"];

var [a,b]= arr; //taking first two elements
var [a,b,c,d,e,f,g,h,i] = arr; //taking all the elements
console.log(a,b,c);

var [a,b,...c] = arr; //? taking first two and rest as array in c via spread
console.log(a,b,c);

* For Obejects - 
let obj = {
    name : "Huz",
    age : 22,
    email : "abc@gmail.com"
}

let obj2 = {...obj};

obj2.age = 100;

*/

// obj1 = {
//     name : "John",
//     age : 22,
//     email : "abc@gmail.com"
// }

// let {name, age} = obj1;
// console.log(name);
// console.log(age);

var user = {
    name :"Hammy",
    id : 23,
    city : "York",
    town : "Yorktown",
    country : "USA"
}

var {name, id, town} = user; //? Here town will take value from user object as town field
var {name, id, ...town} = user; //? Here town in rest operator will take all the remaining fields

console.log(name, id, town);

