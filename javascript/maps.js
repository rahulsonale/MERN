// let myMap = new Map();

// myMap.set("101", "Pankaj");
// myMap.set("102", "Adarsh");
// myMap.set("103", "Disha");
// myMap.set("104", "Naman");
// myMap.set("105", "Sania");
// console.log(myMap.get("103"));
// console.log(myMap.has("105"));
// console.log(myMap.delete("101"));

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

let str = [10, 20, 10, 30, 40, 50, 30];
let result = checkfreq(str);
console.log(result);

function checkfreq(str2) {
  let mymp1 = new Map();
  for (let nums of str2) {
    if (nums === " ") continue;
    if (mymp1.has(nums)) {
      mymp1.set(nums, mymp1.get(nums) + 1);
    } else {
      mymp1.set(nums, 1);
    }
  }
  return mymp1;
}

let str2 = "hello world";
let result2 = checkfreq(str2);
console.log(result2);

//set
let fruits = new Set();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple");

console.log(fruits);

//anagram method

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("Hello", "method"));

//Another method for this 
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  
  let freqCounter = {};

  for(let char of str1){
    freqCounter[char] = {freqCounter[char] || 0 } +  1;
  }

  fo(let char of str2){
    if(!freqCounter[char]){
        return false;
    }
    freqCounter[char] -= 1;
  }
  return true;
}