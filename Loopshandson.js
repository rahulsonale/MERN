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
