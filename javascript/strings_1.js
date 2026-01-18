/* ============== Strings ============== */
let str = "Hi, I'm Rahul";
let str2 = "Hi, I'm Rahul";
let str3 = `Hi, I'm  Rahul"`;
let str4 = 'Hi, Im " Rahul';
console.log(typeof str);
console.log(typeof str2);
console.log(typeof str3);
console.log(typeof str4); //all are strings

/* Printing a string */
console.log(str);

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

/* Strings are Immutable --> we cannot change the value of string literals  */
str4[0] = "Y"; //this will not change the str4
console.log(str4);
str4 = "Y"; //this can be done
console.log(str4);

/* count the number of words in below string */
let words = "Hi how was your day";
let spaces = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] === " ") spaces++;
}
console.log("Total words: " + ++spaces);

/* Methods in Strings */

// includes() -> checks if a substring is present in the string or not
console.log("baloon".includes("oon")); // can search for a string of more than or equal to 1 length
console.log("baloon".includes("ooN")); // is case sensitive in nature

// replace() -> only replace the first value of the target string with new value
str = "shoes";
console.log(str.replace("s", "d")); //returns a new string, doesn't change the original one

// replaceAll() -> replaces all the occurrences of target with new value
str = "shows";
console.log(str.replaceAll("s", "a")); //returns a new string, doesn't change the original one

// trim() -> removes all the leading and trailing spaces
console.log("      yruhjd    uhewd dojksdj dsds    ".trim()); //returns a new string, doesn't change the original one

// substring() -> gives a substring based on various terms & conditions
console.log("abhishek".substring(2)); // ->gives substring from index = 2 to last index | [2, n)
console.log("abhishek".substring(2, 6)); // ->gives substring from index = 2 to 5 | [2,5] | [2,6)
console.log("abhishek".substring(-2)); // -> (converts negative values to 0) gives substring from [0,n)
console.log("abhishek".substring(-2, 6)); // -> [0, 6)
console.log("abhishek".substring(5, 2)); // -> [2, 5)
console.log("abhishek".substring(5, -3)); // -> [0, 5)

// slice() -> almost same as substring() method, but only differs when the range is negative
console.log("acciojob".slice(2)); // [2, n)
console.log("acciojob".slice(-2)); // gives exactly 2 characters from end
console.log("acciojob".slice(4, -2)); // output: oj ---> starts at 4th index, ends before last 2 characters
console.log("acciojob".slice(-7, -2)); // start from 7th element from end, and ends before 2nd element from end

// repeat()
console.log("abcd".repeat(12));

console.log("abcd".__proto__); // consoles the wrapper object details

// charAt()
console.log("vscode".charAt(3));

// indexOf()
console.log("stringMethodsring".indexOf("ring"));
console.log("stringMethodsring".indexOf("ring", 7));

// toLowerCase()
console.log("AbCd".toLowerCase());

// toUpperCase()
console.log("AbCd".toUpperCase());
