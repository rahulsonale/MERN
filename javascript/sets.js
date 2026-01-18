//A Set is a collection of unique values (no duplicates).
let s = new Set([1, 2, 3, 3, 4]);
console.log(s);

//Creating a set
let mySet = new Set();

//Adding values
mySet.add(10);
mySet.add(20);
mySet.add(10);
s.add(33); // duplicate, will be ignored

console.log(mySet);
console.log(s);

//Check if value exists
console.log(mySet.has(10)); // true
console.log(mySet.has(30)); // false

//Deleting a value
mySet.delete(20);

//set size
console.log(mySet.size);
console.log(s.size);

//Iterating a set
for (let value of mySet) {
  console.log(value);
}

let str = "helloworld";
let set = new Set(str);
console.log([...set].join(""));
