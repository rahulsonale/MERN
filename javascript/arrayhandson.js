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

/*Index of Element:You are given an integer array Arr of size N and a number X. You need to print all the indexes of the given X in the array, else print -1.*/
function indexOfElement(N, X, arr) {
  let result = [];
  for (let i = 0; i < N; i++) {
    if (arr[i] === X) {
      result.push(i + 1);
    }
  }
  if (result.length === 0) {
    console.log(-1);
  } else {
    console.log(result.join(" "));
  }
}

/*Count Pairs with Difference K*/
function Pairs(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === k) {
        count++;
      }
    }
  }
  return count++;
}

/*Plus Minus:Given an array arr of N integers, Calculate the ratios of its elements that are positive, negative, and zero to the array size N.
Print the decimal value of each fraction in a new line up to 6 decimal places
*/
function printRatios(arr) {
  let count_p = 0;
  let count_n = 0;
  let count_z = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      count_n++;
    } else if (arr[i] > 0) {
      count_p++;
    } else if (arr[i] === 0) {
      count_z++;
    }
  }
  console.log((count_p / n).toFixed(6));
  console.log((count_n / n).toFixed(6));
  console.log((count_z / n).toFixed(6));
}

/*Find Index of Largest Number in Array*/
function ArrayProblem1(n, arr) {
  let max_element = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > max_element) {
      max_element = arr[i];
    }
  }
  return arr.indexOf(max_element);
}

/*Last occurrence in unsorted array:Given an unsorted integer array of size n. Find the last occurrence of a given key.

The key is always present in the array.*/

function findIndex(key, arr) {
  let last_index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      last_index = i;
    }
  }
  console.log(last_index);
}
