/*Sum of Even Numbers*/
let sum = 0;
var ans;
for (i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
    ans = sum;
  }
}
console.log(ans);

/*Palindrome Number Checker*/
let reverse = 0;
let original = Number(n);
while (n > 0) {
  let rev = n % 10;
  reverse = reverse * 10 + rev;
  n = Math.floor(n / 10);
}

if (reverse === original) {
  console.log(true);
} else {
  console.log(false);
}

/*N Stars
Input
3
output:
----------
* * *    -
*        -
*        -
*        -
----------
*/
let row = "";
for (let i = 1; i <= n; i++) {
  row += "* ";
}
console.log(row);

for (let j = 1; j <= n; j++) {
  console.log("*");
}

/*Sum of Digits
Complete the function SumofDigits() that takes an integer N as a parameter and returns the sum of its digits.
Input
2
25
28

Output
7
10
*/
function SumofDigits(n) {
  var digit;
  let total = 0;
  while (n > 0) {
    digit = n % 10;
    total += digit;
    n = Math.floor(n / 10);
  }
  return total;
}

/*Check Prime*/
function is_prime(N) {
  if (N <= 1) {
    return `${N} is not a prime number`; // numbers <= 1 are not prime
  }

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      return `${N} is not a prime number`; // found a divisor, not prime
    }
  }

  return `${N} is a prime number`;
}
//-->Call function here

/*ques:Star Pyramid Creation
Pattern Image
  *
 * *
* * *

*/
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += "* ";
  }
  console.log(row);
}

//-->n = input

/*Ques:Print Continuous Character Pattern\
Input
5
Output
A
BC
CDE
DEFG
EFGHI
*/
function printPattern(n) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      let char = alphabet[(i - 1 + j) % 26];
      row += char;
    }
    console.log(row);
  }
}

printPattern(n);

/*Prime Numbers Range*/
let n = parseInt(input);

for (let num = 2; num <= n; num++) {
  let isPrime = true;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

/*Right Angle Triangle Stars 
Input:3
Output:
*
**
***

*/
for (i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}
