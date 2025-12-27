//print number from N to 1
function printNum(n) {
  if (n == 0) return; //base case
  console.log(n);
  printNum(n - 1); //recursive call
}
printNum(4);

//print number from 1 to N
function printNum(n) {
  if (n > 10) return; //base case
  console.log(n);
  printNum(n + 1); //recursive call
}
printNum(1);

//reverse the number from 10 to 1
function printNum(n) {
  if (n === 0) return; //base case
  console.log(n);
  printNum(n - 1); //recursive call
}
printNum(10);

//print hello world using recursion 5 times
function printHello(n) {
  if (n === 0) return;
  console.log("hello World");
  printHello(n - 1);
}
printHello(5);

//print 1-5 and the 5-1
function twowaypath(n, current = 1) {
  if (current > n) return;
  console.log(current);
  twowaypath(n, current + 1);
  console.log(current);
}
twowaypath(5);

// //print 5-1 and the 1-5
// function twoway(n , current = 5){
//     if(current < n ) return;
//     console.log(current);
//     twowaypath(n,current - 1);
//     console.log(current);

// }
// twowaypath(5);

/*ques : return sum of natural number*/
function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
console.log(sum(5));

//reverse the string
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("Hello"));

//factorial
// function factorial(n) {
//   if (n === 0) return;
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));
function printUp(n) {
  if (n === 0) return; // BASE CASE
  printUp(n - 1); // RECURSIVE CALL (go down first)
  console.log(n); // PRINT on the way back
}

printUp(5);
