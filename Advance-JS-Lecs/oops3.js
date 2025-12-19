// class Animal {
//     constructor(name, breed){
//         this.name = name;
//         this.breed = breed;
//     }
//     eat(){
//         console.log("This animal is eating");
//     }
// }


//* 2nd Way of declaring class like a variable;
let Animal = class {
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
    eat(){
        console.log("This animal named ", this.name, " is eating");
    }
}


let an1 = new Animal("Jazz", "Breed");
an1.eat();



//Inheritance ->
class Rubber{
    #name = "";
    constructor(){
        this.#name = "Hello";
    }

    set name(name){
        this.#name = name;
    }

    get name(){
        return this.#name;
    }
}

let r1 = new Rubber();

//! Private variables cant be accessed outside of class
// r1.#name = "Meetha";
// console.log(r1.#name);

//? Using Getters and Setters
p.name = "Testing";
console.log(p.name);


//TODO : Questions
//1. Make 5 users using A CLASS andn same without class

class Users {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    showEmail(){
        console.log(this.email);
    }

    loggedIn(){
        console.log(this.name + " is logged in");
    }
}

let u1 = new Users("huz",22,"abc@gmail.com");
u1.showEmail();
u1.loggedIn();

let u2 = new Users("huz",22,"abc@gmail.com");

let u3 = new Users("huz",22,"abc@gmail.com");

let u4 = new Users("huz",22,"abc@gmail.com");

let u5 = new Users("huz",22,"abc@gmail.com");

//without class

u11 = {
    name : "huz",
    age : 22,
    email : "abc@gmail.com",
    showEmail : function(){
        console.log(this.email);
    },

    logged : function(){
        console.log(this.name + " is logged in");
    }
}

//Rest all the objects like this ....









