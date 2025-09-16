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
