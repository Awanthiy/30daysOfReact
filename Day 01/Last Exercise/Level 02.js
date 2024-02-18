class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  introduce() {
    console.log(`Hi! I'm ${this.name}, a ${this.color} ${this.age} year old animal with ${this.legs} legs.`);
  }

  makeSound() {
    console.log("A generic animal sound...");
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }

  // Override the makeSound method for Dogs
  makeSound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, isIndoor) {
    super(name, age, color, legs);
    this.isIndoor = isIndoor;
  }

  // Override the makeSound method for Cats
  makeSound() {
    console.log("Meow!");
  }

  purr() {
    console.log("Purr...");
  }
}

// Example usage:
const myDog = new Dog("Sparky", 3, "Brown", 4, "Golden Retriever");
const myCat = new Cat("Fluffy", 2, "White", 4, true);

myDog.makeSound(); // Output: Woof! (Override method specific to Dog)
myCat.makeSound(); // Output: Meow! (Override method specific to Cat)
