/*undeclared : This means a variable is never been defined or created eg:
--> console.log(a);
--> output = ReferenceError: age is not defined*/

/*ways to create (construct) an object
1.Object Literal --> normal object making const person = {
  name: "Rahul",
  age: 22,
  city: "Pune"
};

console.log(person.name);

2.Using new Object()
3.Constructor Function
4.ES6 Classes
*/

console.log(100 + "8" + 20); //100820
console.log(100 - "8" - 20); //72
console.log("100" - "8");

// let abc = 100;
// if (function xyz() {}) {
//   abc = abc - typeof xyz;
// }
// console.log(abc);

//output --> NAN

//function abc() {}
//console.log(typeof abc); //output : function -->Even though functions are technically objects in JavaScript, the language gives them a special type when using typeof.

let obj = {
  xyz: "prabitra",
  pqr: function () {
    console.log(this.xyz);
  },
};
const c = obj.pqr;
obj.pqr(); //prabitra
c(); //undefined

let arr = ["pabitra", "abc"];
let ans = arr.includes("abc", -2);
console.log(ans);
