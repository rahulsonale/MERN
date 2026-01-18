//searching...

const { use } = require("react");

function freqcounter(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

let arr = [43, 435, 6343, 3432, 432, 2];
console.log(freqcounter(arr, 34322));

function checkstring(str, tar) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === tar) {
      return 1;
    }
  }
  return -1;
}

let str = "Hello";
console.log(checkstring(str, "f"));

// function findByName(users, name) {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].Name === name) {
//       return users[i];
//     }
//   }
//   return null;
// }

// let users = [
//   { id: 1, Name: "Pankaj", City: "Pune" },
//   { id: 2, Name: "Ravi", City: "Mumbai" },
//   { id: 3, Name: "Amit", City: "Hyderabad" },
// ];

// console.log(findByName(users, "Ravi"));
