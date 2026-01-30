//The core problem : When elements are created later (dynamically), events attached earlier don’t work on them.

// 1. Peformance is enhanced
// 2. dynamic content is handled
// 3. clearner code as all logic related to handling is in a single place
// 4. memory efficient since we register a single event listener

/*Event Bubbling & Capturing*/

// parent.addEventListener("click", () => {
//   console.log("Parent clicked");
// });

// child.addEventListener("click", () => {
//   console.log("Child clicked");
// });

/*Click button → output:*/
//-->Child clicked
//-->Parent clicked

/*stopPropogation();*/
// child.addEventListener("click", (e) => {
//   e.stopPropagation();
// });
//By using this parent will not get triggered

//call / apply / bind refresher.
// window.firstName = "Rahul";
// window.lastName = "Sonale";

// function printFullName() {
//   console.log(`${this.firstName} ${this.lastName}`);
// }

const person2 = {
  firstName: "Raj",
  lastName: "Singh",
};

//printFullName();
//printFullName.call(person2);

class Person {
  firstName = "Gaurav";
  lastName = "Sen";
  printFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  printAge(age, secondpara) {
    console.log(secondpara);
    return `${this.firstName}'s age is ${age}`;
  }
  addMarks(firstSubjectMarks, secondSubjectMarks) {
    return `The total marks for ${this.firstName} is: ${firstSubjectMarks + secondSubjectMarks}`;
  }
}

const person = new Person();
// using the call function we are able to pass set the value of this explicitly
// using this we can achieve function borrowing.

console.log(person.printFullName());
console.log(person.printAge(22, "Hello how are you"));
console.log(person.printFullName.call(person2));
console.log(person.printAge.call(person2, 25, "I live in Mumbai"));

// apply
console.log(person.printAge.apply(person2, [32, "another param"]));
//only difference is that you have to add []sq brackets in apply method , outcome will be the same as call method.

// bind

// you can set this context
// multiple params can be passed using comma separated values
// creates a newFunction with the values you have passed
// the values for the newFunction always remain fixed whenever the newFunction is called.

console.log(person.addMarks(20, 30));
const newFunction = person.addMarks.bind(person2, 30);
console.log(newFunction(20));
console.log(newFunction(40));
console.log(newFunction(60));

const anotherFn = person.addMarks.bind(person2, 50);
console.log(anotherFn(10));
// depending on what you want to achieve you can create new behaviour using existing functionality
