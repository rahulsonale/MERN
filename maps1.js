/*maps : special type of object used to store ker value pairs*/

//Creating a Map
let map = new Map();

//Adding a value --> using set() method
map.set("name", "Rahul");
map.set(10, "Number key");
map.set(true, "Boolean key");

//Getting a value --> using set() method
console.log(map.get("name")); // Rahul
console.log(map.get(10)); // Number key
console.log(map.get("Number key")); // this will give = undefined

//To check if the key exists --> using has() method
console.log(map.has("name")); // true
console.log(map.has("Rahul")); // false --> only check for key not value.
console.log(map.has("Number key")); // false

//Deleting a key --> using delete() method
map.delete(10);

//map size
console.log(map.size); // number of key-value pairs

//Iterating a map --> iterating keys

for (let key of map.keys()) {
  console.log(key);
}

//Iterating values
for (let value of map.values()) {
  console.log(value);
}

//Iterate key-value pair
for (let [key, value] of map) {
  console.log(key, ":", value);
}

let arr = [3, 4, 6, 2, 7, 3, 2, 5, 2, 5, 7, 2, 7, 7];
function checkfreq(arr) {
  let mymp = new Map();
  for (let nums of arr) {
    if (mymp.has(nums)) {
      mymp.set(nums, mymp.get(nums) + 1);
    } else {
      mymp.set(nums, 1);
    }
  }
  return mymp;
}
