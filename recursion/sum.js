function sum(arr) {
  console.log(arr)
  if ( arr[0] === undefined ) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
}

console.log(sum([4, 6, 12, 40]))