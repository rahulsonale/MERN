// let num = 0;
// if (num > 0) {
//   console.log("number is  positive");
// } else console.log("number is negative");
// //using ternary

// let n = 56;
// n > 0 ? console.log("p") : console.log("n");

//eligible to vote

// let age = 18;
// age >= 18 ? console.log("Eligible") : console.log("not Eligible");

// //Write a program that prints "even" if a number is even, otherwise prints "odd".
// let check = 46;
// check % 2 === 0 ? console.log("Even") : console.log("Odd");

//Write a program to print a grade based on marks:

// Marks ≥ 90 → "A"

// Marks ≥ 75 → "B"

// Marks ≥ 50 → "C"

// Else → "Fail"

// let marks = 56;
// if (marks >= 90) {
//   console.log("A");
// } else if (marks >= 75) {
//   console.log("B");
// } else if (marks >= 50) {
//   console.log("C");
// } else console.log("Fail");

// Greeting Based on Time
// Write a program that takes the current hour (0–23) and prints:

// 0–11 → "Good Morning"

// 12–16 → "Good Afternoon"

// 17–20 → "Good Evening"

// 21–23 → "Good Night"

// let hour = 2;
// if (hour >= 0 && hour <= 11) {
//   console.log("Good Morning");
// } else if (hour >= 12 && hour <= 16) {
//   console.log("Good Afternoon");
// } else if (hour >= 17 && hour <= 20) {
//   console.log("Good Evening");
// } else if (hour >= 21 && hour <= 23) {
//   console.log("Good Night");
// } else console.log("Invalid Value");

// //To check if a year is a leap year or not

// let year = 2000;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Leap Year");
// } else {
//   console.log("Not Leap Year");
// }

// //find largest of three numbers.
// let n1 = 34;
// let n2 = 63;
// let n3 = 61;
// if (n1 > n2 && n1 > n3) {
//   console.log("n1 is greater");
// } else if (n2 > n3) {
//   console.log("n2 is greater");
// } else {
//   console.log("n3 is greater");
// }

//smallest among three number
// let m1 = 5;
// let m2 = 16;
// let m3 = 7;
// if (m1 < m2 && m1 < m3) {
//   console.log(m1, "is Smallest");
// } else if (m2 < m1 && m2 < m3) {
//   console.log(m2, "is Smallest");
// } else {
//   console.log(m3, "Is smallest");
// }

// let sum = 0;
// var ans;
// for (i = 1; i <= 13; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//     ans = sum;
//   }
// }
// console.log(ans);

// let a = 3;
// let b = 4;
// let c = 5;
// if (2 * c ** 2 < a ** 2 + b ** 2 + c ** 2) {
//   console.log("1");
// } else if (2 * c ** 2 > a ** 2 + b ** 2 + c ** 2) {
//   console.log("3");
// } else if (2 * c ** 2 === a ** 2 + b ** 2 + c ** 2) {
//   console.log("2");
// } else {
//   console.log("Invalid Input");
// }

// let n = 28;
// let total = 0;
// while (n > 0) {
//   digit = n % 10;
//   total += digit;
//   n = Math.floor(n / 10);
// }

// console.log(total);

// let n = 4;
// let m = 1;
// for (i = 1; i <= n; i++) {
//   m = m * i;
// }
// console.log(m);

// for (let i = 1; i <= 10; i++) {
//   let row = "";
//   for (j = i; j >= 1; j--) {
//     row += j;
//   }
//   console.log(row);
// }

// let n = 5;
// let str = "";
// for (let i = 1; i <= n; i++) {
//   str = str + "*";
// }
// console.log(str);

// let row = "";
// for (let i = 1; i <= 3; i++) {
//   row += "* ";
// }
// console.log(row);

// for (let j = 1; j <= 3; j++) {
//   console.log("*");
// }

// let n = 12;
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

let a = 75;
let b = 90;
while (b !== 0) {
  let t = b;
  b = a % b;
  a = t;
}
console.log(a);
