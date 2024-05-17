//버블 정렬
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

//console.log(bubbleSort([2, 1, 5, 3, 2]));

// 삽입정렬
function insertionSort(array) {
  let list = new Array(array.length);

  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = current;
  }
  return array;
}

//console.log(insertionSort([1, 2, 3, 4, 5]));

// 병합정렬
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }
  return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}

//console.log(mergeSort([100, 50, 32, 67, 17, 2, 8, 99, 54, 77, 23, 5]));

// 퀵 정렬
function quickSort(arr) {
  quick_sort(arr, 0, arr.length - 1);
  return arr;
}
function quick_sort(arr, left, right) {
  if (left < right) {
    let pivot = partition(arr, left, right);
    quick_sort(arr, left, pivot - 1);
    quick_sort(arr, pivot + 1, right);
  }
  return arr;
}
function partition(arr, left, right) {
  let pivot = arr[arr.length - 1]; // pivot값을 랜덤으로 설정함으로서 최악의 경우를 어느정도 방지
  let start = left + 1;
  let end = right;

  while (start <= end) {
    while (start <= end && arr[start] <= pivot) start += 1;
    while (start <= end && arr[end] >= pivot) end -= 1;
    if (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
  }
  let temp = arr[left];
  arr[left] = arr[end];
  arr[end] = temp;

  return end;
}
console.log(quickSort([9, 3, 7, 5, 6, 2, 8]));

const graph = [
  ["a", "b", 5],
  ["b", "d", 4],
  ["d", "e", 4],
  ["b", "e", 3],
  ["c", "e", 2],
  ["e", "f", 2],
  ["a", "d", 1],
];
