/*Consecutive Pair Sum

Input : 4 3
arr = 1 2 4 3

Output : 1*/
function ArrayProblem(arr, k) {
  let count = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] === k) {
      count++;
    }
  }
  return count;
}

/*Count Numbers Greater Than 35*/
function ArrayProblem2(n, arr) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > 35) {
      count++;
    }
  }
  return count;
}
