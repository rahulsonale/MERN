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
