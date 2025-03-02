/**
 * Quick sort
 * 
 * const arr = [-6, 8, 20, -2, 4]
 * quickSort(arr) => [-6, -2, 4, 8, 20]
 * 
 * Quick sort idea:
 * 1. Identify the pivot element in the array:
 *    1.1. Pick first element as pivot;
 *    1.2. Pick last element as pivot;
 *    1.3. Pick a random element as pivot;
 *    1.4. Pick median as pivot;
 * 2. Put everything that's smaller than pivot into a `left` array and
 * everything that's greater than the pivot into a `right` array;
 * 3. Repeat the process for the individual `left` and `right` arrays till
 * you have an array of length 1 which is sorted by definition;
 * 4. Repeatedly concatenate the left array, pivot and right array till
 * one sorted array remains.
 * 
 * E.g.
 * [-6, 8, 20, -2, 4]
 * 
 * pivot = 4
 * leftArray = [-6, -2]
 *    leftArray step
 *      pivot = -2
 *      leftArray = [-6]
 *      rightArray = []
 *        Concatenating:
 *          [-6, -2]
 * 
 * rightArray = [8, 20]
 *    rightArray step
 *      pivot = 20
 *      leftArray = [8]
 *      rightArray = []
 *        Concatenating:
 *          [8, 20]
 * 
 *    Concatenating:
 *      [-6, -2, 4, 8, 20]
 * 
 * Time Complexity:
 * Average-case: O(n log n)
 * Worst-case: O(n²)
 * 
 * Space Complexity - O(n)
 */

const arr = [-6, 20, 8, -2, 4]

const quickSort = (arr) => {
  let pivot = arr[arr.length - 1];

  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }

  if (leftArray.length) {
    leftArray = quickSort(leftArray);
  }

  if (rightArray.length) {
    rightArray = quickSort(rightArray);
  }

  return [...leftArray, pivot, ...rightArray];
}

module.exports = () => {
  console.log('%calgorithms/sorting-algorithms/quick-sort.js:63 quickSort(arr)', 'color: #007acc;', quickSort(arr));
}
