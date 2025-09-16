//add to number using functions
function fun(n, m) {
  let add = n + m;
  return add;
}
console.log(fun(3, 4));

function solve(n, r) {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  let nr = n - r;
  let fact_2 = 1;
  for (let j = 1; j <= nr; j++) {
    fact_2 *= j;
  }

  let final = fact / fact_2;
  return final;
}
