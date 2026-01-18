// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");;
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");

//Using While loops
//too much work for developer
//Chances of error
//unable to count the number of repetitions
//to solve these issues,we can use loops.
// let count = 10;
// while (count > 0) {
//   console.log("hi");
//   count--;
// }

//counting from 1 to 10
//O(10)
// let counting = 1;
// while (counting <= 10) {
//   console.log(counting);
//   counting++;
// }

//even number
//O(12)
// let count = 0;
// while (count <= 25) {
//   console.log(count);
//   count += 2;
// }
//10 to 0
// time complexity  : O(10)
// let count = 10;
// while (count >= 0) {
//   console.log(count);
//   count--;
// }

// for(let i=0; i<10;i++){
//     console.log("hi");

//

// init...value of variable
//check... C is true.
// exe the line of code inside.
//increment the value

//Excercise
// time complexity : O(10)
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

/// time complexity : O(50/3)
// for (j = 3; j <= 50; j += 3) {
//   console.log(j);
// }

// let n = 35;
// for (i = 20; i <= n; i++) {
//   console.log(i ** 2);
// }

// n = 15;
// let start = 20;

//for(let i =start ; i <= start + n ;i++){
//console.log(i*i);
//}

// let num = 5;
// for (i = 1; i <= 10; i++) {
//   console.log(`${num} * ${i} = ${num * i}`);
// }

let sum = 0;
for (i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
