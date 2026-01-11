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
