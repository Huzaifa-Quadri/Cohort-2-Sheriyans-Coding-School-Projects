class biscuit {
  constructor(animal, age, color) {
    this.animal = animal;
    this.age = age;
    this.color = color;
  }

  Animal() {
    console.log("This animal is", this.animal);
  }

  Age() {
    console.log("Its Age is ", this.age);
  }

  Color() {
    console.log("Its of Color ", this.color);
  }
}

let b = new biscuit("zebra", 20, "white");

console.log(b);
b.Animal();
b.Age();
b.Color();
