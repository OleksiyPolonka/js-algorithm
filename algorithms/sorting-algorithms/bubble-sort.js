/**
 * Bubble sort
 * 
 * Problem - given an array of integers, sort the array.
 * 
 * const arr = [-6, 20, 8, -2, 4]
 * bubbleSort(arr) => [-6, -2, 4, 8, 20]
 * 
 * Bubble sort idea:
 * 
 * [-6, 20, 8, -2, 4]
 * -6 < 20 ?? true
 * 20 < 8 ?? false - Swap 20 and 8
 * 20 < -2 ?? false - Swap 20 and -2
 * 20 < 4 ?? false - Swap 20 and 4
 * 
 * End of array. Elements swapped? Yes? Repeat comparison
 * 
 * -6 < 8 ?? true
 * 8 < -2 ?? false - Swap 8 and -2
 * 8 < 4 ?? false - Swap 8 and 4
 * 8 < 20 ?? true
 * 
 * ...
 * 
 * [-6, -2, 4, 8, 20]
 * End of array. Elements swapped? No? Array is sorted
 * 
 * Time complexity - O(n^2)
 * Space complexity - O(1)
 */


const arr = [8, 20, -6, -2, 4];

const bubbleSort = (arr) => {
  let isSwapped;

  do {
    isSwapped = false;

    for(let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];

        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while(isSwapped)
}

module.exports = () => {
  bubbleSort(arr)
  console.log('%calgorithms/sorting-algorithms/bubble-sort.js:51 arr', 'color: #007acc;', arr);
}
