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

/*Array Sum, Average and Maximum*/

function arrayOperations(arr, n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let add = arr[i];
    sum += add;
  }
  let avg = Math.floor(sum / n);
  let max_element = Math.max(...arr);
  console.log(sum, avg, max_element);
}
