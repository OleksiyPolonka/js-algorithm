/**
 * Insertion sort
 * 
 * Problem - given an array of integers, sort the array.
 * 
 * const arr = [-6, 8, 20, -2, 4]
 * insertionSort(arr) => [-6, -2, 4, 8, 20]
 * 
 * insertion sort idea:
 * 
 * [-6, 20, 8, -2, 4]
 *
 * nti = 20
 * se = -6
 * nti < se ? no. place 20 to the right of se
 * 
 * nti = 8
 * se = 20
 * 
 * nti < se ? yes. shift 20 to the right
 * 
 * Time complexity - O(n^2)
 * Space complexity - O(1)
 */


const arr = [8, -6, 20, -2, 4];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const nti = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j]
      j = j - 1;
    }

    arr[j + 1] = nti;
  }
}

module.exports = () => {
  insertionSort(arr)
  console.log('%calgorithms/sorting-algorithms/insertion-sort.js:46 arr', 'color: #007acc;', arr);
}
