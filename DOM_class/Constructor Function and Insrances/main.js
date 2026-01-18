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
