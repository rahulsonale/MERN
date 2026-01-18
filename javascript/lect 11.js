//functions
//Q.Function to find average of three numbers.

function average(a, b, c) {
  let avg = (a + b + c) / 3;
  return avg;
}

console.log(average(20, 30, 40));

//write a function to find factorial.

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));

//find ncr
function ncr(n, r) {
  let n_fact = 1;

  for (let i = 1; i <= n; i++) {
    n_fact *= i;
  }

  let nr = n - r;
  let nr_fact = 1;
  for (let j = 1; j <= nr; j++) {
    nr_fact *= j;
  }

  let r_fact = 1;
  for (let i = 1; i <= r; i++) {
    r_fact *= i;
  }

  let final = n_fact / (nr_fact * r_fact);
  return final;
}

console.log(ncr(5, 3));

//short cut way
// function ncr(n,r){
//     let n_fact = factorial(n);
//     let  nr_fact = factorial(n-r);
// }

//to check if the user can vote or not.
// function canvote(userage, username) {
//   if (userage >= 18) {
//     console.log(username + " is allowed to vote");
//   } else {
//     console.log(username + " is not allowed to vote");
//   }
// }
// canvote(18, "Archit");
// canvote(12, "Pankaj");
