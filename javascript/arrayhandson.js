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

/*Maximum difference between two elements in an Array*/
function ArrayProblem(arr) {
  let min_ele = arr[0];
  let max_ele = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min_ele) min_ele = arr[i];
    if (arr[i] > max_ele) max_ele = arr[i];
  }

  console.log(max_ele - min_ele);
}

/*Comparing Array Sums
Input
2
1 2
2
3 4

Output:Second array is larger*/
function arrayProblem(arrA, arrB) {
  let sum_1 = 0;
  for (let i = 0; i < arrA.length; i++) {
    sum_1 += arrA[i];
  }
  let sum_2 = 0;
  for (let j = 0; j < arrB.length; j++) {
    sum_2 += arrB[j];
  }

  if (sum_1 === sum_2) {
    return "Both are equal";
  } else if (sum_1 > sum_2) {
    return "First array is larger";
  } else if (sum_2 > sum_1) {
    return "Second array is larger";
  }
}
