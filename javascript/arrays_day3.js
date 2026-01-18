//print all subarrays
// function printsubarrays(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     // let subarr = [];
//     for (let j = i; j < n; j++) {
//   subarr.push(arr[j]);
//   console.log(subarr.join(" "));

//method-2
//       console.log(arr.slice(i, j + 1).join(" "));
//     }
//   }
// }

// printsubarrays([1, 4, 5, 7, 3, 2]);

//ques 2 - function to print the sum of all subarrays...

// function printsubarrays(arr) {
//   let n = arr.length;
//   let totalsumarr = 0;

//   for (let i = 0; i < n; i++) {
//     let subarr = [];
//     let sum = 0;

//     for (let j = i; j < n; j++) {
//       subarr.push(arr[j]);
//       sum += arr[j];
//       totalsumarr += sum;
//       console.log(subarr.join(" "), sum);
//     }
//   }
//   console.log({ totalsumarr });
// }

// printsubarrays([1, 4, 5, 7, 3, 2]);

//write a function to  print the subarray whose sum is target sum (=T)
//input = [1,4,5,7,3,2],T = 15
//output = [5,7,3]

// function findtargetsumsubarray(arrr, T) {
//   let n = arrr.length;

//   for (let i = 0; i < n; i++) {
//     let subarr = [];
//     let sum = 0;

//     for (let j = i; j < n; j++) {
//       subarr.push(arrr[j]);
//       sum += arrr[j];
//       if (sum === T) {
//         return subarr;
//       }
//     }
//   }
// }
// let arrr = [1, 4, 5, 7, 3, 2];

// console.log(findtargetsumsubarray(arrr, 15));

/*Nested arrays*/
// let Z = [["a", true, 17], ["xyz"]];

// /*2-D arrays*/
// for (let i = 0; i < 3; i++) {
//   let str = "";
//   for (let j = 1; j <= 5; j++) {
//     str += j + 5 + " ";
//   }
//   console.log(str);
// }

//printing 2D arrays

// let arr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8],
//   [9, 10],
// ];

// for (let i = 0; i < arr.length; i++) {
//   let str = "";
//   let sum = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     str += arr[i][j] + " ";
//     sum += str;
//   }
//   console.log(str, sum);
// }

//ques : print sum of each row...
//input : arr = [

// [1,2,3,4,5],
// [6,7,8,9,10],
// [11,12,13,14,15]
// ]
//  output = 15,40,65
// function sumarr2d(){
//     for (let i = 0; i < arr.length; i++) {
//   let str = "";
//   for (let j = 0; j < arr[i].length; j++) {
//     str += arr[i][j] + " ";
//   }

// }
// }

// for (let i = 0; i < arr.length; i++) {
//   let str = "";
//   let sum = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     str += arr[i][j] + " ";
//     sum += str;
//   }
//   console.log(str, sum);
// }

// let ARRAY = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];
// for (let i = 0; i < arr.length; i++) {
//   let str = "";
//   let mult = 1;
//   for (let j = 0; j < arr[i].length; j++) {
//     str += arr[i][j] + " ";
//     mult *= str;
//   }

// }

// let ARRAY = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];

// sum = 0;
// for (let i = 0; i < ARRAY.length; i++) {
//   if (i % 2 == 1) continue;
//   let rowproduct = 1;
//   for (let j = 0; j < ARRAY[i].length; j++) {
//     rowproduct *= ARRAY[i][j];
//   }
//   sum += rowproduct;
// }

// console.log(sum);

// let arr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];

//output --> 1 6 11
//  2 7 12
//  2 8 13
//  2 9 12
//  5 10 15

// for (let i = 0; i < 5; i++) {
//   let ar = [];
//   for (let j = 0; j < 3; j++) {
//     let num = j * 5 + 1 + i;
//     ar.push(num);
//   }
//   console.log(ar.join(" "));
// }

function printdiagonal(arr) {
  let n = arr.length;
  let ar = [];
  let ar2 = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        ar.push(arr[i][j]);
      }
      if (i === n - 1 - i) {
        ar2.push(arr[i][j]);
      }
    }
  }
  console.log({ ar, ar2 });
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
printdiagonal(arr);

//function to check if diagonal sum if odd or even...
function printdiagonal(arr) {
  let n = arr.length;
  let ar = [];
  let ar2 = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        ar.push(arr[i][j]);
      }
      if (i === n - 1 - i) {
        ar2.push(arr[i][j]);
      }
      sum += arr[i][j];
      if (sum % 2 === 1) {
        console.log("odd");
      } else {
        console.log("even");
      }
    }
  }
  console.log({ ar, ar2 });
}

//input A = [7,4,8,6,5]
//output = 56;

const Array1 = [arr, 1, "85", "rty", [2, [4, 5]], 82];
const Array2 = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];

/* Reverse an array 
input : [3,2,4,1,9]
output : [9,1,4,2,3] */

/* reverse each row of a nested 2D array 
input : [
[1,2],
[2,3,4,5],
[3,4,5,6],
];


output: [
[2,1],
[5,4,3,2],
[6,5,4,3]
]*/

function reverse(arr) {}
