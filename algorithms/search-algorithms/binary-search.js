/**
 * Binary search
 * Problem - Give a sorted array of `n` elements and a target element `t`, find
 * the index of `t` in the array. Return -1 if the target element is not found.
 * 
 * arr = [-5, 2, 4, 6, 10], t = 10 -> should return 4
 * arr = [-5, 2, 4, 6, 10], t = 6 -> should return 3
 * arr = [-5, 2, 4, 6, 10], t = 20 -> should return -1
 * 
 * Time complexity - O(log n)
 * Space complexity - O(1)
 */

const arr = [-5, 2, 4 , 6, 10];

const binarySearch = (arr, t) => {
  if (arr.length === 0) return -1;

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while(leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if  (arr[middleIndex] === t) {
      return middleIndex;
    }

    if (arr[middleIndex] > t) {
      rightIndex = middleIndex - 1;
    }

    if (arr[middleIndex] < t) {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}


module.exports = () => {
  console.log('%csearch-algorithms/linear-search.js:27 binarySearch(arr, 10)', 'color: #007acc;', binarySearch(arr, 10));
  console.log('%csearch-algorithms/linear-search.js:27 binarySearch(arr, 6)', 'color: #007acc;', binarySearch(arr, 6));
  console.log('%csearch-algorithms/linear-search.js:27 binarySearch(arr, 20)', 'color: #007acc;', binarySearch(arr, 20));
}
