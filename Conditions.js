/*Number Comparison
Input

1
Output
You entered less*/
function num(n) {
  if (n > 1) {
    return "You entered more";
  } else {
    return "You entered less";
  }
}
console.log(num(n));

/*Quadrants
Input

10
6
Output
1*/
function chamber(x, y) {
  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else {
    console.log("none");
  }
}
chamber(x, y);

/*Divisibility Check
Input

28
Output
Not divisible
Given a number n, If the number is divisible by 6 then print Divisible else Not divisible.*/
function divi(num) {
  if (num % 6 === 0) {
    return "Divisible";
  } else {
    return "Not divisible";
  }
}

console.log(divi(n));
