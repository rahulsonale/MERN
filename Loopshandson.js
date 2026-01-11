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
