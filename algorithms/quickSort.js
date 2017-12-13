/* Quick sort
Steps
1. Select a pivot.
2. Place all items smaller than the pivot value to the left. All items larger than the pivot value to the right.
3. Repeat step two for both left and right side of the pivot
*/


/*
function that swaps the elements to different sides of the partition.
*/
const swap = function(items, firstIndex, secondIndex) {
  let temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}


/* 
The partition function is where most of the work is done in the algorithm. think of the "i" and "j" variables as pointers.
The pointers will compare items in the array to the partition variable to make sure items on the left side are less than the partition and,
 items on the right side are greater than the partition. when the left pointer passes the right pointer the partition stops,
and returns the i variable. this will be used as the pivot point for the next partition. This method of partitioning does not create
any additional arrays.
*/

const partition = function(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)]
  let i = left
  let j = right

  while (i <= j) {
    while (items[i] < pivot) {
      i += 1;
    }
    while (items[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {
      swap(items, i, j)
        i += 1
        j -= 1;
    }
  }
  return i;
}

/* 
the main qucick sort function calls itself recursively. the first if statement is to make sure the function isnt given an array of 0 or 1 items.
the left and right options are given default values if the user doesn't provide them. index if given the value returned from the partition function. this also starts
the partitioning and the sort. this will return a number to be used as the ihndex. if the left is less than the returned index than additional sorting needs to be done, 
and quick sort is then called recursiveluy to further partition the array. the same is true if the right value is greater than the returned index. the aray is then returned sorted.
*/

const quickSort = function(items, left, right) {
  
  if (items.length > 1) {
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;

    let index = partition(items, left, right);

    if (left < index - 1 ) {
      quickSort(items, left, index - 1);
    }

    if(index < right) {
      quickSort(items, index, right);
    }
  }
  return items
}

var myArr = [4, 2, 6, 5, 4, 9];

console.log(quickSort(myArr));