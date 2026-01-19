/*What is a Constructor Function?
A constructor function is a special function used to create objects.
Naming rule: First letter must be Capitalized (convention)*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const P1 = new Person("Rahul", 22);
const P2 = new Person("Amit", 20);
console.log(P1);
console.log(P2);

/*The new Keyword (VERY IMPORTANT)
When you use new, JavaScript does 4 things internally:
1️⃣ Creates an empty object {}
2️⃣ Sets this to that object
3️⃣ Links object to constructor’s prototype
4️⃣ Returns the object automatically*/

/*Instance Properties
Properties defined using this are instance properties.*/

//Default Parameters
function Car(brand = "Unknown", speed = 0) {
  this.brand = brand;
  this.speed = speed;
}

const car1 = new Car("BMW", 300);
const car2 = new Car("Audi", 200);
console.log(car1);
const car3 = new Car();
console.log(car3); //default parameters will get set automatically.

//Instance Independence
car2.speed = 400;
console.log(car2); //speed is change from 200 to 400.

//Another example

function Cars(name, manufacturer, yearOfManufacture) {
  this.name = name;
  this.manufacturer = manufacturer;
  this.yearOfManufacture = yearOfManufacture;
  this.speed = 0;
  this.accelerate = function () {
    this.speed += 25;
  };
}

let cars1 = new Cars("WagonR", "Suzuki", 2026);
let cars2 = new Cars("i20", "Hyundai", 2025);
console.log({ cars1, cars2 });
console.log(JSON.stringify(cars1)); //convert into json format

console.log(cars1.speed);
cars1.accelerate();
console.log(cars1);
cars1.accelerate();
console.log(cars1);

//Prototype : Prototype is a mechanism by which JavaScript objects inherit properties and methods from another object.
function Student(name) {
  this.name = name;

  Student.prototype.greet = function () {
    console.log(`Good Morning everyone my name is ${this.name}`);
  };
}

let student1 = new Student("Ankit");
let student2 = new Student("Arya");
let student3 = new Student("Sohail");
let student4 = new Student("Manasi");

student1.greet();
student2.greet();
student3.greet();
student4.greet();

//This is how prototype works.

//Real life example --> bank Account

function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;

  BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
  };
  BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
  };
}

const account_person1 = new BankAccount("Ajay", 25000);
const account_person2 = new BankAccount("Sneha", 30000);
const account_person3 = new BankAccount("Sahil", 16000);
const account_person4 = new BankAccount("Priya", 10000);

account_person1.deposit(2000);
account_person2.deposit(3000);
account_person2.withdraw(1000);
account_person4.withdraw(1000);
console.log(account_person1.balance);
console.log(account_person2.balance);
console.log(account_person2.balance);
console.log(account_person3.balance);
console.log(account_person4.balance);
