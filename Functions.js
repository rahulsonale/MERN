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

/*Frequency of digit
You are given a number n and a digit d
Input
986272
2

Output:2
2 occurs 2 times in the given digit. Hence the output will be 2.
*/
function frequencyOfDigit(n, d) {
  let str_n = n.toString();
  let str_d = d.toString();
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    if (str_n[i] === str_d) {
      count++;
    }
  }
  return count;
}

/*Second Last Digit Zero Checker*/
function determineSecondLastDigit(n) {
  let str = n.toString();
  if (str.length < 2) return false;
  return str[str.length - 2] === "0";
}

/*Digit Frequency Counter
Given a number N and a digit D. Write a program to find how many times the digit D appears in the number N.
*/

function countFreqDigit(n, d) {
  let str_n = n.toString();
  let str_d = d.toString();
  let count = 0;
  for (let i = 0; i < str_n.length; i++) {
    if (str_n[i] === str_d) {
      count++;
    }
  }
  return count;
}
