//factorial.

// const n = 10;
// let fact = 1;
// for (i = 1; i <= n; i++) {
//   fact *= i;
// }

// console.log({ fact });

// let num = 7;
// let dis_count = 0;
// for (let i = 1; i <= 15; i++) {
//   if (num % i == 0) {
//     dis_count++;
//   }
// }

// if (discount > 2) {
//   console.log(" not prime");
// } else console.log("prime");

/*break keyword*/

// const num = 17;
// for (let i = 1; i <= 100; i++) {
//   if (i % num === 0) {
//     continue;
//   }
//   console.log(i, i * i);
// }

//continue: skip further statements

// let num = 5;
// let count = 0;
// for (let i = 1; i <= 200; i++) {
//   if (i % num === 0) {
//     if (i % 2 === 0) {
//       continue;

//     }
//     console.log(i);
//     count++;
//     if(count===10){
//         break;
//     }
//   }
// let n = 10;
// for (let j = 0; j < n; j++) {
//   let str = "";
//   for (let i = 1; i < 10; i++) {
//     str += "*";
//     console.log(str);
//   }
// }

// let N = 7;

// let string = "";
// for (i = 1; i < N; i++) {
//   string += i;
//   console.log(string);
// }

// //homework question
// do{
//   const response = prompt("Do you want to continue");
//     console.log({ response });
// }while()

// let num = 0;
// if (num > 0) {
//   console.log("number is  positive");
// } else console.log("number is negative");
//using ternary

// let n = 56;
// n > 0 ? console.log("p") : console.log("n");

//eligible to vote

// let age = 18;
// age >= 18 ? console.log("Eligible") : console.log("not Eligible");

//Write a program that prints "even" if a number is even, otherwise prints "odd".
// let check = 46;
// check % 2 === 0 ? console.log("Even") : console.log("Odd");

// let n = 10;
// for (let j = 0; j < n; j++) {
//   let str = "";
//   for (let i = 1; i < 10; i++) {
//     str += "*";
//     console.log(str);
//   }
// }
// let n = 10;
// let reverse = 0;
// while (n > 0) {
//   let rev = n % 10;
//   reverse = reverse * 10 + rev;
//   n = Math.floor(n / 10);
// }
// console.log(reverse);

// let n = 121;
// let reverse = 0;
// while (n > 0) {
//   let rev = n % 10;
//   reverse = reverse * 10 + rev;
//   n = Math.floor(n / 10);
// }
// console.log(reverse);
// if (reverse === n) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let n = 1221;
// let reverse = 0;
// let original = n;

// while (n > 0) {
//   let rev = n % 10;
//   reverse = reverse * 10 + rev;
//   n = Math.floor(n / 10);
// }

// if (reverse === original) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let n = 100000000;
// let sum = 0;
// for (i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// let nu = 10;
// for (let j = 0; j < n; j++) {
//   let str = "";
//   for (let i = 1; i < 10; i++) {
//     str += "*";
//     console.log(str);
//   }
// }

// let n = 5;
// for (i = 1; i <= n; i++) {
//   console.log(i);
// }

// for (j = 1; j <= 4; j++) {
//   let n = 5;
// for (i = 1; i <= n; i++) {
//   console.log(i);
// }
// }

for (let i = 1; i <= 10; i++) {
  let row = "";
  for (j = i; j <= 1; j--) {
    row += j;
  }
  console.log(row);
}
