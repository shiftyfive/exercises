function euclidean(x, y) {
  if (x === 0 || y === 0) {
    return Math.max(x, y)
  }
  return euclidean(y, x % y);
}

function euclidean2(x, y) {
  if (x === 0 || y === 0) return Math.max(x, y)
  return euclidean(Math.min(x, y), Math.max(x, y) % Math.min(x, y));
}

function euclidean3(x, y) {
  if (x < y) {
    throw 'first input must be greater than second'
  } 
  if (x === 0 || y === 0) {
    return Math.max(x, y)
  }
  1 =return euclidean(x, x % y)
}

euclidean3(191, 192)