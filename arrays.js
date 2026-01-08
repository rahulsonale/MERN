//Arrays  in JS//
//removes the pain of creating multiple variables for same type of data.
//array can be  of number ,strings...

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// n = arr.length;

// let sum = sumofarray(arr);
// console.log({ sum });

// function sumofarray(arr) {
//   let n = arr.length,
//     sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

//ques: find the absolute of {sum of all odd elements} and {sum of all even elemenst}.
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let n = array.length;

// function absolute(array) {
//   let odd_num = 0;
//   let even_num = 0;

//   for (let i = 0; i < n; i++) {
//     if (i % 2 !== 0) {
//       odd_num += array[i]; // odd index sum
//     } else {
//       even_num += array[i]; // even index sum
//     }
//   }

//   let diff = odd_num - even_num;
//   return Math.abs(diff);
// }

// let final = absolute(array);
// console.log({ final });

// let array = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// let n = array.length;

// function fb(array) {
//   for (let i = 0; i < n; i++) {
//     let num = array[i];

//     if (num % 3 === 0 && num % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (num % 3 === 0) {
//       console.log("Fizz");
//     } else if (num % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(num);
//     }
//   }
// }

// fb(array);

/*Insertion in Arrays*/
//1. push()--> Inserts at the end.
//2.unshift()--> inserts at the beginning.

//homework ques--> how to insert multiple elements using push and unshift.

//deletion in Arrays.(homework))
//using pop() method , use at the end

//shift() --> use at the beginning.

//homework--> write a function to return the index of a target element.
//function findindex(arr,targetvalue){

//return indexoftargevalue;

//if targetvalue does not exists in array , then return -1.

//method of array to find the index of given element...--> use indexOf() method for this.
//another method is there but it shows only true or false if the  given element is present or not. that is --> includes().

//find and update the value of 10 element to 14 using indexof () and includes() methods.

// let arr = [1, 34, 23, 53, 64, 10, 3];
// if (arr.includes(10)) {
//   let check = arr.indexOf(10);
//   console.log(check);
// }

// arr[5] = 14;
// console.log(arr);

/*Consecutive Pair Sum 
Input

4 3
1 2 4 3
Output
1
*/
function ArrayProblem(arr, k) {
  let count = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] === k) {
      count++;
    }
  }
  return count;
}

/*Count Numbers Greater Than 35
Input

5
12 67 89 16 23
Output

2*/
function ArrayProblem2(n, arr) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > 35) {
      count++;
    }
  }
  return count;
}

/*Array Sum, Average and Maximum
Input

6
1 2 3 4 5 6
Output
21 3 6
*/
function arrayOperations(arr, n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let add = arr[i];
    sum += add;
  }
  let avg = Math.floor(sum / n);
  let max_element = Math.max(...arr);
  console.log(sum, avg, max_element);
}

/*Sorted Insert Position
Input

4
1 3 5 6 
5
Output
2
*/
function searchInsert(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      return i;
    } else if (a[i] > b) {
      return i;
    }
  }
  return a.length;
}

/*Maximum difference between two elements in an Array
Input
4
16 24 89 35
Output
73
*/
function ArrayProblem(arr) {
  let min_ele = arr[0];
  let max_ele = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min_ele) min_ele = arr[i];
    if (arr[i] > max_ele) max_ele = arr[i];
  }

  console.log(max_ele - min_ele);
}

/*Comparing Array Sums
Example 1
Input

2
1 2
2
3 4
Output
Second array is larger*/

function arrayProblem(arrA, arrB) {
  let sum_1 = 0;
  for (let i = 0; i < arrA.length; i++) {
    sum_1 += arrA[i];
  }
  let sum_2 = 0;
  for (let j = 0; j < arrB.length; j++) {
    sum_2 += arrB[j];
  }

  if (sum_1 === sum_2) {
    return "Both are equal";
  } else if (sum_1 > sum_2) {
    return "First array is larger";
  } else if (sum_2 > sum_1) {
    return "Second array is larger";
  }
}

/*Index of Element
Example 1:

Input

5 1
2 1 3 1 1
Output:
2 4 5*/
function indexOfElement(N, X, arr) {
  let result = [];
  for (let i = 0; i < N; i++) {
    if (arr[i] === X) {
      result.push(i + 1);
    }
  }
  if (result.length === 0) {
    console.log(-1);
  } else {
    console.log(result.join(" "));
  }
}
