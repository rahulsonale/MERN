// function determineSecondLastDigit(n) {
//   // write code here
//   let str = n.toString();
//   if (str.length < 2) {
//     return false;
//   }
//   if (str[str.length - 2] === "0") {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }

// console.log(determineSecondLastDigit(242343043));

// //Ques . Binary to decimal
// function binToDec(s) {
//   //Write code here
//   let decimal = 0;
//   let power = 0;
//   while (s > 0) {
//     let lastdigit = s % 10; //last digit
//     decimal += lastdigit * Math.pow(2, power);
//     power++;
//     s = Math.floor(s / 10); //removes last digit
//   }
//   return decimal;
// }

// console.log(binToDec(101011));

//Count number greater than 35
let arr = [23, 223, 43, 32, 10, 34, 56, 865, 342];

function greater(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 35) {
      count++;
    }
  }
  return count;
}
console.log(greater(arr));
