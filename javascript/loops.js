//factorial.

// const n = 10;
// let fact = 1;
// for (i = 1; i <= n; i++) {
//   fact *= i;
// }

// console.log({ fact });

// let num = 7;
// let dis_count = 0;
// for (let i = 1; i <= 15; i++) {
//   if (num % i == 0) {
//     dis_count++;
//   }
// }

// if (discount > 2) {
//   console.log(" not prime");
// } else console.log("prime");

/*break keyword*/

// const num = 17;
// for (let i = 1; i <= 100; i++) {
//   if (i % num === 0) {
//     continue;
//   }
//   console.log(i, i * i);
// }

//continue: skip further statements

// let num = 5;
// let count = 0;
// for (let i = 1; i <= 200; i++) {
//   if (i % num === 0) {
//     if (i % 2 === 0) {
//       continue;

//     }
//     console.log(i);
//     count++;
//     if(count===10){
//         break;
//     }
//   }
// let n = 10;
// for (let j = 0; j < n; j++) {
//   let str = "";
//   for (let i = 1; i < 10; i++) {
//     str += "*";
//     console.log(str);
//   }
// }

// let N = 7;

// let string = "";
// for (i = 1; i < N; i++) {
//   string += i;
//   console.log(string);
// }

// //homework question
// do{
//   const response = prompt("Do you want to continue");
//     console.log({ response });
// }while()

// let num = 0;
// if (num > 0) {
//   console.log("number is  positive");
// } else console.log("number is negative");
//using ternary

// let n = 56;
// n > 0 ? console.log("p") : console.log("n");

//eligible to vote

// let age = 18;
// age >= 18 ? console.log("Eligible") : console.log("not Eligible");

//Write a program that prints "even" if a number is even, otherwise prints "odd".
// let check = 46;
// check % 2 === 0 ? console.log("Even") : console.log("Odd");

// let n = 10;
// for (let j = 0; j < n; j++) {
//   let str = "";
//   for (let i = 1; i < 10; i++) {
//     str += "*";
//     console.log(str);
//   }
// }
// let n = 10;
// let reverse = 0;
// while (n > 0) {
//   let rev = n % 10;
//   reverse = reverse * 10 + rev;
//   n = Math.floor(n / 10);
// }
// console.log(reverse);

// let n = 121;
// let reverse = 0;
// while (n > 0) {
//   let rev = n % 10;
//   reverse = reverse * 10 + rev;
//   n = Math.floor(n / 10);
// }
// console.log(reverse);
// if (reverse === n) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let n = 1221;
// let reverse = 0;
// let original = n;

// while (n > 0) {
//   let rev = n % 10;
//   reverse = reverse * 10 + rev;
//   n = Math.floor(n / 10);
// }

// if (reverse === original) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let n = 100000000;
// let sum = 0;
// for (i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// let nu = 10;
// for (let j = 0; j < n; j++) {
//   let str = "";
//   for (let i = 1; i < 10; i++) {
//     str += "*";
//     console.log(str);
//   }
// }

// let n = 5;
// for (i = 1; i <= n; i++) {
//   console.log(i);
// }

// for (j = 1; j <= 4; j++) {
//   let n = 5;
// for (i = 1; i <= n; i++) {
//   console.log(i);
// }
// }

// for (let i = 1; i <= 10; i++) {
//   let row = "";
//   for (j = i; j <= 1; j--) {
//     row += j;
//   }
//   console.log(row);
// }

let star = 5;
for (let i = 1; i <= star; i++) {
  let row = "";
  for (let j = 1; j <= star - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += "* ";
  }
  console.log(row);
}
for (let i = 1; i <= star - 1; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += " ";
  }
  for (let k = 1; k <= star - i; k++) {
    row += "* ";
  }
  console.log(row);
}

/*ABC... pattern*/

function Alphapattern(n) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      let char = alphabet[(i - 1 + j) % 26];
      row += char;
    }
    console.log(row);
  }
}

Alphapattern(7);

//Checking prime number upto n
function checkprime(n) {
  for (let num = 2; num <= n; num++) {
    isprime = true;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        isprime = false;
        break;
      }
    }
    if (isprime) {
      console.log(num);
    }
  }
}
checkprime(13);

//Diamond pattern
let n = 5;
let mid = Math.ceil(n / 2);

for (let i = 1; i <= mid; i++) {
  let row = "";
  for (let j = 1; j <= mid - i; j++) {
    row += "  ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "* ";
  }
  console.log(row);
}
for (let i = mid - 1; i >= 1; i--) {
  let row = "";

  for (let j = 1; j <= mid - i; j++) {
    row += "  ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "* ";
  }

  console.log(row);
}

//staircase
/*  #
   ##
  ###
 ####*/

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let s = 1; s <= n - i; s++) {
    row += " ";
  }

  for (let j = 1; j <= i; j++) {
    row += "#";
  }

  console.log(row);
}

//Right Angle Triangle Stars
for (i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}

//Descending Number Pattern
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j >= 1; j--) {
    row += j;
  }
  console.log(row);
}

//Alphabet Pattern Printing

for (let i = 1; i <= n; i++) {
  let char = String.fromCharCode(64 + i);
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += char;
  }
  console.log(row.trim()); // remove trailing space
}

//Armstrong Numbers in Range
let digits = str.length;
let sum = 0;

// calculate sum of digits^digits
for (let i = 0; i < str.length; i++) {
  let digit = Number(str[i]);
  sum += Math.pow(digit, digits);
}

// check Armstrong condition
if (sum === num) {
  console.log(num);
}
