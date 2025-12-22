//* SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

class Student{
    constructor(name, rollNumber){
        name = name;
        rollNumber = rollNumber;
    }
    
    introduce(){
        console.log("Student name is",this.name,"has roll number",this.rollNumber);
    }
}

let s1 = new Student("Huz",22);
s1.introduce();

// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.

//? Without this, the blank object will not have any fileds named 'name' and 'rollNumber'
//? Hence undefined is printed on console 

// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

let obj = 
{
    name : "Sample Object",
    func1 : function(){
        console.log("Saying hello in es5 function", this);
        
    },
    func2 : () => {
        console.log("Saying hello in es6 function", this);
        
    }
}

// Inside both, print this and observe the difference.
obj.func1(); //? Giving object in this 
obj.func2(); //? Giving window in this

// The goal is to clearly understand how this works and when it changes.

//* SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).

//? Bina class ke bhi constrcutor function banta hai, like this -
function Room(){
    this.space = 100;
    this.name = "Area1";
}

let r1 = new Room();
console.log(r1);

//? function name with first letter capital, and values set using this keyword is constructor function in es5 without class and calling function wih 'new' keyword
// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype

function User(){
    this.name = "Huz",
    this.hobby1 = function(){ //! Defining with constructor, will go into individual memory/own memory
        console.log("Gaming......");
    }
}

User.prototype.hobby2 = function(){ //! Defining with prototype, will go into shared memory
    console.log("Coding......");
}

let u = new User();
u.hobby1();
u.hobby2();

// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

let u1 = new User();
let u2 = new User();

console.log(u1.hobby1 === u2.hobby1); //? false -> As they are in individual memory, they are different
console.log(u1.hobby2 === u2.hobby2); //? true -> As they are in shared memory, they are same

// The purpose here is to understand how prototypes help share behavior efficiently.


//* SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.

function f1(name){
    console.log("The name is :",this.name);
}
// 	14.	Create an object that contains a name property.
let obj2 = {
    name : "abhishek"
}

f1() //? Will print blank as in normally this will print window and window.name is blank
console.log("Passing object as parameter to function --->");
f1(obj2); //! WHy undefined -> As we are passing obj2 as parameter, this will point to obj2 but we are not using this.name

// Use call to run the function using the object
f1.call(obj2); //? Will print abhishek as in this case this will point to obj2


// Use apply to run the function using the object
f1.apply(obj2); //? Will print abhishek as in this case this will point to obj2

// Use bind to create a new function and then call it

let t = f1.bind(obj2);
t();

// 	15.	Borrow a method from one object and run it for another object using call.

// The goal is to understand how this can be manually controlled.