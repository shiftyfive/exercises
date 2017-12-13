const binarySearch = function(arr, item) {
  let mid = Math.floor(arr.length / 2);
  let guess = arr[mid];
  if (guess === item) {
    return guess;
  } else if (guess > item) {
    return binarySearch(arr.splice(0, mid), item);
  } else if (guess < item) {
    return binarySearch(arr.splice(mid, arr.length - 1), item);
  }
}

var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(binarySearch(numArr, 10))