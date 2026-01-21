//ES6 Class : Class Declaration
// class Person{

// } THis is how you create a class , Class is a blueprint , it does not create object immediately it can be created using "new" keyword

class Person {
  constructor(name, age) {
    //this runs automatically , used to initialize data
    this.name = name; // Only one constructor per class {imp}.
    this.age = age;
  }
}

//Instance Method
class Student {
  //This  is new method which is memory efficient also as compare to older
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello everyone my name is ${this.name}`);
  }
}

const name1 = new Student("Rahul");
console.log({ name1 });

//Getter and Setter : Used to control access to properties
class User {
  constructor(username) {
    this._username = username;
  }

  get username() {
    return this._username.toUpperCase();
  }

  set username(value) {
    if (value.length < 3) {
      console.log("Length is too short");
    } else {
      console.log(value);
    }
  }
}

const u1 = new User("Shanaya");
console.log(u1.username);
u1.username = "sh";

//Static method
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

MathUtils.add(2, 3);

//Private Fields

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance());
