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
    console.log("Generic animal sound..."); // Placeholder, override in child classes
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, isIndoor) {
    super(name, age, color, legs);
    this.isIndoor = isIndoor;
  }

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

myDog.introduce(); // Output: Hi! I'm Sparky, a Brown 3 year old animal with 4 legs.
myDog.makeSound(); // Output: Woof!

myCat.introduce(); // Output: Hi! I'm Fluffy, a White 2 year old animal with 4 legs.
myCat.makeSound(); // Output: Meow!
myCat.purr(); // Output: Purr...
