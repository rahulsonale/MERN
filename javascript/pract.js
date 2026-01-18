let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (i % 2 == 1) continue;
  let rowProduct = 1;
  for (let j = 0; j < arr[i].length; j++) {
    rowProduct *= arr[i][j];
  }
  sum += rowProduct;
}
console.log("Sum of product of even-indexed rows:", sum);
