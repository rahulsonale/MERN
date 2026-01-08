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
