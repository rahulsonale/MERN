let numbers = [22, 1, 33, 12, 14, 16];

function bubbleSort(list) {
  for (let outerIndex = 0; outerIndex < list.length - 1; outerIndex++) {
    let swapped = false;

    console.log({ outerIndex });

    for (
      let innerIndex = 0;
      innerIndex < list.length - outerIndex - 1;
      innerIndex++
    ) {
      if (list[innerIndex] > list[innerIndex + 1]) {
        // let temp = list[innerIndex];
        // list[innerIndex] = list[innerIndex + 1];
        // list[innerIndex + 1] = temp;

        [list[innerIndex], list[innerIndex + 1]] = [
          list[innerIndex + 1],
          list[innerIndex],
        ];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return list;
}

console.log(bubbleSort(numbers));

// Worst case time complexity = O(n^2)
// use it for small data sets only
// mostly used to teach sorting.

//Ques2: Another sorting questionn

function bubbleSort(N, arr) {
  for (let i = 0; i < N - 1; i++) {
    let swapping = false;
    for (let j = 0; j < N - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapping = true;
      }
    }
    if (!swapping) break;
  }
  return arr;
}

//questions : Another bubble sort problem
//Print three values in separate lines:
//Number of swaps it took to sort the array using the above algorithm.
//First element in the array after sorting the array.
//Last element in the array after sorting the array.
//Input:
//3
//6 4 1
//Output:
//3
//1
//6
function bubbleSort(a, n) {
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    let swapping = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapping = true;
        count++;
      }
    }
  }
  console.log(count);
  console.log(a[0]);
  console.log(a[n - 1]);
}

//question : Find Smallest Greater
//Input :
// 4 --> length
//13 6 17 12
//Output
//17 12 -10000000 13
function smallestGreaterElements(arr) {
  let n = arr.length;
  let finalvalue = [];
  for (let i = 0; i < n; i++) {
    let max = [];
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) {
        max.push(arr[j]);
      }
    }
    if (max.length === 0) {
      finalvalue.push(-10000000);
    } else {
      finalvalue.push(Math.min(...max));
    }
  }
  return finalvalue;
}

/*Index of the target element after sorting
Input

6
6 27 2 3 1 5
5
*/

function indexAfterSort(arr, target) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < target) {
      count++;
    }
  }
  return count;
}
