//Slicing in Array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sliced = arr.slice(1, 4);
console.log(sliced);
console.log(arr); //original array remains tha same.

console.log(arr.slice(1)); //1 to N
console.log(arr.slice()); //Entire array will get display.

//lets check if negative value is passed in slice.
console.log(arr.slice(-1)); //returns last element.
console.log(arr.slice(-2)); //returns the last two elements.
console.log(arr.slice(1, -2));

//splice in array.
let A = [10, 20, 30, 40];
console.log(A.splice(1, 3)); //removes elements --> 20,30,40
console.log(A); //gives the remaining 10.

//Concat --> In JavaScript, concat() is used to join arrays (or values) together without changing the original arrays.
let B = [1, 2, "Rahul"];
let C = [3, 4];
console.log(B.concat(C));

//concatinating multiple arrays.
let b = [1, 2];
let c = [3, 4];
let d = [5, 6];
let e = [7, 8];
console.log(b.concat(c, d, e));

//types of loops for array.
/* the basic loop */
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

//for in loop...
for (let index in arr) {
  console.log(index);
  // console.log(typeof index) --> type of index here is "string"
}

//example
let Arr = [21, 3566, 4643, 3432, 32];
for (index in Arr) {
  console.log(index);
}
//if we need values lets print...
for (index in Arr) {
  console.log(Arr[index]);
}

//for of loop...
for (let value of Arr) {
  console.log(value);
}
///* Write a function which prints the prefix sum of an array

// input: [12, 4, -8, 10]
// output: [12, 16, 8, 18]
// */
let ARRAY = [2, 4, 6, 8];

function prefixSum(ARRAY) {
  let sum = 0;
  let result = [];
  for (let value of ARRAY) {
    sum += value;
    result.push(sum);
  }
  console.log(result);
}

prefixSum(ARRAY); // Output: [2, 6, 12, 20]

/* Can be done this way also
  let sum = 0;
  for (let value of arr) {
    sum += value;
    console.log(sum);
    } */

//   let prefixArr = [];
//   prefixArr[0] = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     prefixArr[i] = prefixArr[i - 1] + arr[i];
//   }

//   return prefixArr;
// }

// arr = [12, 4, -8, 10];
// console.log(prefixSum(arr));

/* How to swap values of two variables */

let x = 10;
let y = 20;
console.log({ x, y });

let temp = x;
x = y;
y = temp;

console.log({ x, y });

/* Swapping two values of an array 
input: arr = [1,2,3,4,5], ind1 = 1, inde2 = 4

output: arr = [1,5,3,4,2]
*/

function swappingarray(ARR, ind1, ind2) {
  let temp = ARR[ind1];
  ARR[ind1] = ARR[ind2];
  ARR[ind2] = temp;

  console.log({ ARR });
}

let ARR = [12, 32, 44, 5, 43];
swappingarray(ARR, 1, 4);

//Question -> print elements at odd indices of an array
// input1: arr = [1,2,3,4,5] --> odd length array
// output1: 2 4.

let arrayy = [1, 2, 3, 4, 5];
for (let k = 0; k < arrayy.length; k += 2) {
  console.log(arrayy[k]);
}

// input2: arr = [1,2,3,4,5,6] --> even length array
// output2: 2 4 6
let arrayyy = [1, 2, 3, 4, 5];
for (let m = 1; m < arrayyy.length; m += 2) {
  console.log(arrayy[m]);
}

//swapalternate array;

function swapalternatearray(E) {
  let n = E.length;
  for (let i = 1; i < n; i += 2) {
    let temp = E[i];
    E[i] = E[i - 1];
    E[i - 1] = temp;
  }
  console.log({ E });
}
let E = [1, 2, 3, 4, 5];
swapalternatearray(E);

/* ===== Heterogenous property of Arrays in JS ===== */
arr = [1, 2, "123", 2.344, true, [3, 4, "five", [2, 5, "printMe"]]];

//How to print "printMe" from above array
console.log(arr[5][3][2]);
