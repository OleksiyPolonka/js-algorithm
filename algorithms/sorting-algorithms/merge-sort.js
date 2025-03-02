/**
 * Merge sort
 * 
 * const arr = [-6, 8, 20, -2, 4]
 * mergeSort(arr) => [-6, -2, 4, 8, 20]
 * 
 * Merge sort idea
 * Divide the array into sub arrays, each containing only one element
 * (An array with one element is considered sorted)
 * 
 * Repeatedly merge the sub arrays to produce new sorted arrays until
 * there is only one sub array remaining. That will be sorted array.
 * 
 * E.g.
 * Divide step:
 * 
 * [-6, 8, 20, -2, 4]
 * [-6, 8] [20, -2, 4]
 * [-6] [8] [20] [-2, 4]
 * [-6] [8] [20] [-2] [4]
 * 
 * Merge steps:
 * [-6, 8] [20] [-2, 4]
 * [-6, 8] [-2, 4, 20]
 * [-6, -2, 4, 8, 20]
 * 
 * merge algo:
 * [-6] [8] => []; if left and right not empty compare -6 < 8
 * [] [8] => [-6] left is empty, push right array
 * [] [] => [-6, 8]
 * 
 * [20] [-2, 4] => []; compare -2 < 20
 * [20] [4] => [-2]; compare 4 < 20
 * [20] [] => [-2, 4]; the right array is empty. push left array
 * [] [] => [-2, 4, 20]
 * 
 * [-6, 8] [-2, 4, 20] => []; -6 < -2
 * [8] [-2, 4, 20] => [-6]; 8 < -2
 * [8] [4, 20] => [-6, -2]; 8 < 4
 * [8] [20] => [-6, -2, 4]; 8 < 20
 * [] [20] => [-6, -2, 4, 8]; left array is empty
 * [] [] => [-6, -2, 4, 8, 20]; left array is empty
 * 
 * Time Complexity - O(n log n)
 * 
 * Space Complexity - O(n)
 */

const arr = [-6, 8, 20, -2, 4];
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const sortedArr = [];

  while(left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }

  return [...sortedArr, ...left, ...right]
}

module.exports = () => {
  console.log('%calgorithms/sorting-algorithms/merge-sort.js:78 mergeSort', 'color: #007acc;', mergeSort(arr));
}
