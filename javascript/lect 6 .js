/* precendence and associativity example */

let c = 3 * 4 + (30 / 6) * 5 ** 2;
console.log(c);

let x = 3 + 3 ** 2 - (3 * 4) / 6; // 3 + 9 - 2 = 10
console.log(x);

const y = ("123" + 1) * 2 ** 2 - 21 / 7; // (1231) * 4 - 3 = 4921
console.log(y);

const z = "123" + (((5 * 5) / 25) * 2) / 5;
console.log(z);

const p = 5 + 3 * 2 ** 2 - ((12 / 4 + 1) % 2); // 5 + 12 - 1 % 2 = 17
console.log(p);

///////////////* conditional statement example *///////////

let num = 4;
if (num % 2 === 0) console.log("even");
else console.log("odd");

//........... Logical Operators.............. //
let age = 25;
if (age >= 18 && age <= 60) console.log("eligible for job");
else console.log("not eligible for job");

//half of number is even or odd
if ((num / 18) % 2 === 0) console.log("half is even");
else console.log("half is odd");

// if condition , else is not necessary
let a = "123";
const b = 12;
let d = 12;

if (a == b) {
  console.log("Both a & b has same value");
}
if (b === d) {
  console.log("Both b & d has same value and  datatype");
}

// grading system //
let marks = 100;
if (marks >= 80) {
  console.log("A+ grade");
} else if (marks >= 60) {
  console.log("B+ grade");
} else if (marks >= 40) {
  console.log("C+ grade");
} else {
  console.log("Fail");
}

//if age is greater than 18 & gender=male => print "Mature Boy" and if 18 & gender = female => print "Mature Girl".
let age1 = 18;
let gender = "Male";
if (age1 >= 18) {
  if (gender == "Female") {
    console.log("Mature Girls");
  }
  if (gender == "Male") {
    console.log("Mature Boy");
  }
}

// print the lucky draw winner if ticket no. is 11 or 101 then the person is lucky draw winner
let ticket_no = 101;
if (ticket_no === 11 || ticket_no === 101) {
  console.log("lucky draw winner");
} else {
  console.log("not a lucky draw winner");
}

// if a user is logged in and has subscription print" premium user,giving accessto premimum contacts" otherwise print "please subscribe to premium"
let isLoggedIn = true;
let hasSubscription = false;
if (isLoggedIn && hasSubscription) {
  console.log("premium user, giving access to premium contacts");
} else {
  console.log("please subscribe to premium");
}

// All no.s except 17 are good no.s check if a no. is good or not.....we have to use != operator
//num=14 --> good no., num=17 --> not a good no.,num=1000--> good no.
num = 50;
if (num != 17) {
  console.log("good no.");
} else {
  console.log("not a good no.");
}

//Given a thhree digit no. check if its a palindrome or not....by using % extraction
//num=121 --> palindrome, num=123 --> not a palindrome,
num = 121;
let last_digit = num % 10;
let first_digit = Math.floor(num / 100);
let middle_digit = Math.floor((num % 100) / 10);
if (first_digit === last_digit) {
  console.log("palindrome");
} else {
  console.log("not a palindrome");
}

//check if no. is decimal or integer
num = 11;
if (num % 1 == 0) {
  console.log("integer");
} else {
  console.log("decimal");
}

//check the ceil value of a no.
num = 11.1;
console.log(Math.ceil(num));

// given two no's,find the greater one using if-else statement...leta=10,b=12...print the max value no. and that max value store in another variable 'c'
let m = 100;
let n = 12;
let max;
if (m > n) {
  max = m;
} else {
  max = n;
}
console.log("max value is ", max);

//....................TERNARY OPERATOR..........................//
/* Ternary operator must have FALSE part*/

//to check number is even or odd
const numb = 10;
numb % 2 == 0 ? console.log("Even") : console.log("Odd");

const outputs = numb % 2 == 0 ? "Even" : "Odd";
console.log(numb + " is the" + outputs);

//to check number is positive or negative
const numbs = -10;
numbs > 0 ? console.log("Positive") : console.log("Negative");

//nested ternary operator
let a1 = -20;
let R = a1 > 0 ? "Positive" : a1 < 0 ? "Negative" : "Zero";
console.log(a1 + " is a " + R + " number");

//To find higher mark and name of that person
let nam1 = "Ram";
let nam2 = "Shyam";
let m1 = 70;
let m2 = 30;
let higherNam = m1 > m2 ? nam1 : nam2;
let higherMark = m1 > m2 ? m1 : m2;
console.log(higherNam + " having highest marks as " + higherMark);

//Multiple statements in ternary operators
m1 > m2
  ? ((higherNam = nam1), (higherMark = m1))
  : ((higherNam = nam2), (higherMark = m2));
console.log(higherNam + " having very highest marks as " + higherMark);

const n11 = 5;
const n12 = 2008;
const n13 = 67;

const maxNum = n11 > n12 && n11 > n13 ? n11 : n12 > n13 ? n12 : n13;
console.log("The largest number is " + maxNum);

console.log(Math.max(n11, n12, n13));
console.log(Math.min(n11, n12, n13));

const dy = 3;
const day =
  dy == 1
    ? "Monday"
    : dy == 2
    ? "Tuesday"
    : dy == 3
    ? "Wednesday"
    : dy == 4
    ? "Thursday"
    : dy == 5
    ? "Friday"
    : dy == 6
    ? "Saturday"
    : dy == 7
    ? "Sunday"
    : "Invalid number";
console.log("The day is:" + day);

let ageee = 19;
let canVoteOrNot = ageee >= 18 ? "Can Vote" : "Cannot vote";
console.log(canVoteOrNot);

let nm = 27;
let evenOrOdd = (nm / 2) % 2 == 0 ? "Number is even" : "Number is odd";
console.log(evenOrOdd);

// == , ===
let aa = "34";
let bb = 34;
let cc = 34;

// ==
let equality =
  aa == bb ? aa + " is equal to " + bb : aa + " is not equal to " + bb;
console.log(equality);
// ===
equality =
  aa === bb ? aa + " is equal to " + bb : aa + " is not equal to " + bb;
console.log(equality);

//To check the grade.
let score = 50;
let grade =
  score >= 80
    ? "A+"
    : score < 80 && score >= 60
    ? "A"
    : score < 60 && score >= 50
    ? "B"
    : "FAIL";
console.log(grade);

//To check the age for mature girl and boy
let agee = 23;
let Gender = "Female";
let result =
  agee > 18 && Gender == "Female"
    ? "Mature Girl"
    : agee > 18 && Gender == "Male"
    ? "Mature Boy"
    : "Invalid Input";
console.log(result);

//lucky draw number
let num1 = 45;
let winnerOrLoser = num1 == 11 || num1 == 101 ? "Winner" : "Loser";
console.log(winnerOrLoser);

//To check loggedIn and Subscription.
let loggedIn = true;
let subscription = true;
let premiumOrNot =
  loggedIn && subscription
    ? "Premium user having premium access of content"
    : "Upgrade your plan";
console.log(premiumOrNot);

//To check number is good or not
let n1 = 89;
let goodOrBad = n1 == 17 ? "Number is good" : "Number is bad";
console.log(goodOrBad);

//To check number is pallindrome or not
let number = 238;
let firstDigit = Math.floor(number / 100);
let lastDigit = number % 10;
let pallindrome =
  firstDigit == lastDigit
    ? number + " is pallindrome"
    : number + " is not pallindrome";
console.log(pallindrome);

//To check number is decimal or not
let nn = 17.5;
let decimalOrInteger =
  Math.floor(nn) === nn ? nn + " is a integar" : nn + " is a decimal number";
console.log(decimalOrInteger);

let num11 = 1020;
let num12 = 67;
let greaterNum =
  num11 > num12
    ? num11 + " is greater than " + num12
    : num12 + " is greater than " + num11;
console.log(greaterNum);
