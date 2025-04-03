// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// arr1.sayhello = () => {
//   console.log("Hello");
// };

// arr2.sayhello = () => {
//   console.log("Hello");
// };

//! factory function

// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(
//         `Hello my name is ${this.name} and I am ${this.age} years old`
//       );
//     },
//   };
//   return person;
// }

// let p1 = personMaker("yash", 21);
// let p2 = personMaker("om", 19);

//! New Operator :

//todo    Create Constructor : doesn't return anything & start with capital letter
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk = function () {
//   console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
// };

// let p1 = new Person();
// p1.name = "yash";
// p1.age = 21;
// p1.talk();

// let p2 = new Person("Om", 19);
// p2.talk();

//! Classes :
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   talk() {
//     console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
//   }
// }

// let p1 = new Person("yash", 21);
// p1.talk();

//! Inheritance :

//** Base class / Parent class */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years
        old`);
  }
}

//* child class
class Student extends Person {
  constructor(name, age, marks) {
    super(name, age); //*parent class constructor is being called
    this.marks = marks;
  }
}

//* child class
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); //*parent class constructor is being called
    this.subject = subject;
  }
}
