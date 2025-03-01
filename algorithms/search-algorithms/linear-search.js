/**
 * Linear search
 * Problem - Give an array of `n` elements and a target element `t`,
 * find the index of `t` in the array. Return -1 if the target element is
 * not found.
 * 
 * arr = [-5, 2, 10, 4, 6], t = 10 -> should return 2
 * arr = [-5, 2, 10, 4, 6], t = 6 -> should return 4
 * arr = [-5, 2, 10, 4, 6], t = 20 -> should return -1
 * 
 * Time complexity - O(n)
 * Space complexity - O(1)
 */

const arr = [-5, 2, 10, 4, 6];

const linearSearch = (arr, t) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }

  return -1;
}


module.exports = () => {
  console.log('%csearch-algorithms/linear-search.js:27 linearSearch(arr, 10)', 'color: #007acc;', linearSearch(arr, 10));
  console.log('%csearch-algorithms/linear-search.js:27 linearSearch(arr, 6)', 'color: #007acc;', linearSearch(arr, 6));
  console.log('%csearch-algorithms/linear-search.js:27 linearSearch(arr, 20)', 'color: #007acc;', linearSearch(arr, 20));
}
