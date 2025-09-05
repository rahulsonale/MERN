///   " "--> 0

//different method.
//let WinnerName = name1;
//let WinnerMarks = marks1;

//if (marks2 > marks1) {
//WinnerName = name2;
//WinnerMarks = marks2;
//}

//console.log(WinnerName, "has scored highest marks = ", WinnerMarks);

//Ternary Operator
//let number = 2;

//Homework question:Try all yesterday's question with ternary operator.

//Ques : print the name and score of highest scoring student USING TERNARY OPERATOR.

// let checkmarks =
//   marks1 > marks2
//     ? `${name1} has scored highest marks which is ${marks1}`
//     : `${name2} has scored highest marks which is ${marks2}`;
// console.log(checkmarks);

//ques: Print greatest among three number.
// const number1 = 3000;
// const number2 = 440;
// const number3 = 3640;

// let highest_marks =
//   number1 > number2 && number1 > number3
//     ? "Number one is greater"
//     : number2 > number3
//     ? "number2 is greater"
//     : "number 3 is greater";

// console.log(highest_marks);

//Ques: Print 1-7 into Weekdays

// let num = Number(prompt("Enter the number"));
// if (num === 1) {
//   console.log("Monday");
// } else if (num === 2) {
//   console.log("Tuesday");
// } else if (num === 3) {
//   console.log("Wednesday");
// } else if (num == 4) {
//   console.log("Thursday");
// } else if (num == 5) {
//   console.log("Friday");
// } else if (num == 6) {
//   console.log("Saturday");
// } else if (num === 7) {
//   console.log("Sunday");
// } else {
//   console.log("Invalid Number");
// }

//Switch case:

// switch (5) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid number");
// }

//Make a grading system using Switch Statement.
let marks = 45;
switch (true) {
  case 40:
    if (marks <= 40) {
      console.log("You failed");
    }
    break;
}
