//Code to print sum, avg and maximum element...
function arrayOperations(arr, n) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let add = arr[i];
    sum += add;
  }
  let avg = Math.floor(sum / n);
  console.log(sum, avg);
}

let arr = [1, 2, 3, 4, 5, 6];
arrayOperations(arr, 6);

//Note to get the maximum element in the array use -> Math.max() using spread operator or there is a different approach also.

let A = [2, 4, 5, 64, 22];
let max_ele = A[0];
for (let i = 1; i < A.length; i++) {
  if (A[i] > max_ele) {
    max_ele = A[i];
  }
}
console.log(max_ele);

//using spread operator...
let B = [324, 4423, 312432, 43];
let max = Math.max(...B);
console.log(max); //---> this is the easy approach .

//Plus Minus Ratio...

function printRatios(arr) {
  // write code here
  let count_p = 0;
  let count_n = 0;
  let count_z = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      count_n++;
    } else if (arr[i] > 0) {
      count_p++;
    } else if (arr[i] === 0) {
      count_z++;
    }
  }
  console.log(count_n / n, count_p / n, count_z / n);
}

printRatios(arr);

//Ques--> index of number
function indexOfElement(N, X, arr) {
  // write code and print here
  let result = [];
  for (let i = 0; i < N; i++) {
    if (arr[i] === X) {
      result.push(i + 1);
    }
    if (result.push === 0) {
      console.log(-1);
    } else {
      console.log(result.join(" "));
    }
  }
}

//index of maximum_element
function ArrayProblem1(n, arr) {
  // Write code here
  let max_element = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > max_element) {
      max_element = arr[i];
    }
  }
  console.log(indexof(max_element));
}

// Ques : Count Pairs with Difference K - JS
function Pairs(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === k) {
        count++;
      }
    }
  }

  return count;
}

//max diff between two element
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

rl.on("line", (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    arr = input.split(" ").map(Number);
    ArrayProblem(arr);
    rl.close();
  }
  });

  function ArrayProblem(arr) {
    // Write your code here

    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let diff = Math.abs(arr[i] - arr[j]);
        new_arr.push(diff);
      }
    }
    let max_ele = arr[0];
    for (let i = 1; i < new_arr.length; i++) {
    if (max_ele < arr[i]) {
      max_ele = arr[i];
    }
  }
  console.log(max_ele);
}

//printing all subarrays...
function subarrays() {
  let n = arrr.length;
  for (let i = 0; i < n; i++) {
    let subarr = [];
    for (let j = i; j < n; j++) {
      subarr.push(arrr[j]);
      console.log(subarr.join(" "));
    }
  }
}

let arrr = [1, 4, 5, 7, 3, 2];
subarrays(arrr);

/* Function to print the sum of all subarrays' of arr
1 -> sum = 1
1 4 -> sum = 5
1 4 5 -> sum = 10
1 4 5 7 -> sum = 17
1 4 5 7 3 -> sum = 20
1 4 5 7 3 2 -> sum = 22
*/
function sumofsubarrays() {
  let n = arr.length;
  let totalsum = 0;
  for (let i = 0; i < n; i++) {
    let subarr = [];
    let sum = 0;
    for (let j = i; j < n; j++) {
      subarr.push(arr[j]);
      sum += arr[j];
      totalsum += sum;
      console.log(subarr.join(" "), sum);
    }
  }
  console.log({ totalsum });
}

let arr = [1, 4, 5, 7, 3, 2];
sumofsubarrays(arr);

/* Write a function to print the subarray whose sum is target sum (=T) 
input: [1, 4, 5, 7, 3, 2], T = 15
output: [5, 7, 3]
*/

/* 
TC: O(N^2) 
Note: Optimized time complexity is O(N) - you can try on your own
*/

function subarraytarget(array, T) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    let subarr = [];
    let sum = 0;
    for (let j = i; j < n; j++) {
      subarr.push(array[j]);
      sum += array[j];
      if (sum === T) {
        return subarr;
      }
    }
  }
}
let array = [1, 4, 5, 7, 3, 2];
console.log(subarraytarget(array, 15));



//reversed the array..
let ary = [7,5,3,1];
for(let i = -1 ; i >= 0 - ary.length ; i--){
  console.log(arr[]);
  
}