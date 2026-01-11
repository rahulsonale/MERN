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

/*Number Importance Classification
Input

30
Output
more important*/
function number(N) {
  if (N >= 30) {
    return "more important";
  } else {
    return "less important";
  }
}
//console.log(number(35)); ---> Example

/*Number of Days --> Given the number of the month, your task is to calculate the number of days present in the particular month.
Input

1
Output
31*/

function numberOfDays(M) {
  if (
    M === 1 ||
    M === 3 ||
    M === 5 ||
    M === 7 ||
    M === 8 ||
    M === 10 ||
    M === 12
  ) {
    return 31;
  } else if (M === 4 || M === 6 || M === 9 || M === 11) {
    return 30;
  } else if (M === 2) {
    return 28;
  } else {
    return "Invalid month number";
  }
}
//-->Call the function here

/*Student Grade Classification
for marks above 90, print "Excellent".
for marks above 80 and less than equal to 90, print "Good"
for marks above 70 and less than equal to 80, print "Fair".
for marks above 60 and less than equal to 70, print "Meets Expectations".
for marks below 60, print "Below Expectations".*/

function grade(marks) {
  if (marks > 90) {
    return "Excellent";
  } else if (marks > 80 && marks <= 90) {
    return "Good";
  } else if (marks > 70 && marks <= 80) {
    return "Fair";
  } else if (marks > 60 && marks <= 70) {
    return "Meets Expectations";
  } else if (marks <= 60) {
    return "Below Expectations";
  } else {
    return "None";
  }
}

//--> call function here

/*Lear year: Input

2004
Output

1
Explanation

2004 is divisible 4 by hence it's a leap year*/
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(isLeapYear(year));
