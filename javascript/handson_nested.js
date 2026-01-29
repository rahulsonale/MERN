let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.log("Printing 2D array");
for (let i = 0; i < arr.length; i++) {
  let str = " ";
  for (let j = 0; j < arr[i].length; j++) {
    str += arr[i][j] + " ";
  }
  console.log(str);
}

/* Print the sum of each row 
input: arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

output: 
15
40
65
*/
let array = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.log("Printing sum of  2D array");
for (let i = 0; i < array.length; i++) {
  let str = " ";
  let sum = 0;
  for (let j = 0; j < array[i].length; j++) {
    str += arr[i][j] + " ";
    sum += arr[i][j];
  }
  console.log(str, sum);
}

/* Print the [sum of (product of elements of each even indexed-row)] 
input: arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

output: 
360480
(1*2*3*4*5 + 11*12*13*14*15)

*/

sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (i % 2 == 1) continue;
  let rowProduct = 1;
  for (let j = 0; j < arr[i].length; j++) {
    rowProduct *= arr[i][j];
  }
  sum += rowProduct;
}
console.log("Sum of product of even-indexed rows:", sum);

/* Print the matrix col-wise 
input: arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

output: 
1 6 11
2 7 12
3 8 13
4 9 14
5 10 15
*/
console.log("Printing column wise");
for (let i = 0; i < arr[0].length; i++) {
  let str = "";
  for (let j = 0; j < arr.length; j++) {
    str += arr[j][i] + " ";
  }
  console.log(str);
}

/* H.W. - print the sum of elements in odd-indexed columns */
console.log("Sum of elements in odd index");
for (let i = 0; i < arr[0].length; i++) {
  if (i % 2 === 0) {
    continue;
  }
  let str = "";
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    str += arr[j][i] + " ";
    sum += arr[j][i];
  }
  console.log(str, sum);
}

/* Function to print all the elements of primary diagonal */
function getPrimaryDiagonal(arr) {
  let n = arr.length;
  let primaryDiagonal = [];
  for (let i = 0; i < n; i++) {
    primaryDiagonal.push(arr[i][i]);
  }
  return primaryDiagonal.join(" ");
}
function getSecondaryDiagonal(arr) {
  let n = arr.length;
  let secondaryDiagonal = [];
  for (let i = 0; i < n; i++) {
    secondaryDiagonal.push(arr[i][n - i - 1]);
  }
  return secondaryDiagonal.join(" ");
}

arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Primary diagonal:", getPrimaryDiagonal(arr));
console.log("Secondary diagonal:", getSecondaryDiagonal(arr));

/* function to check if primary diagonal sum is odd or even */
function getPrimaryDiagonalSum(arr) {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i][i];
  }
  return sum % 2 == 0 ? true : false; //returning true for even sum, false for odd sum
}
console.log(getPrimaryDiagonalSum(arr));

//Sum of Array Except Self
function sumArrayExceptSelf(nums, n) {
  // Write your code here
  let result = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += nums[j];
    }
    let ans = sum - nums[i];
    result.push(ans);
  }
  console.log(result.join(" "));
}

let nums = [4, 3, 2, 10];
sumArrayExceptSelf(nums, 4);

//reverse the column...
/* H.W -> Reverse columns of a 2D matrix
 
input: [
          [1, 2, 3, 4],
          [2, 3, 4, 5],
          [3, 4, 5, 6],
        ]
output: 
  3 2 1
  4 3 2
  5 4 3
  6 5 4

*/

function rev_column(arr) {
  let n = arr[i].length;
  for (let i = 0; i < n; i++) {}
}

/*Subarray sum divisible by k*/
function subarrayDivisbleByK(arr, n, k) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let subarr = [];
    let sum = 0;

    for (let j = i; j < n; j++) {
      subarr.push(arr[j]);
      sum += arr[j];
      if (sum % k === 0) {
        count++;
      }
    }
  }
  return count;
}
