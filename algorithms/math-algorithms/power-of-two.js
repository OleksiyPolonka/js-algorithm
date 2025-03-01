/**
 * Power of two
 * Problem - Give a positive integer `n`, determine if the number is a power of 2 or not
 *
 * an integer is a power of two if there exists an integer `x` such that `n` === 2^x 
 *
 * isPowerOfTwo(1) = true - (2^0)
 * isPowerOfTwo(2) = true - (2^1)
 * isPowerOfTwo(5) = false
 * 
 * Time complexity - O(log n)
 * Space complexity - O(1)
 * 
 * optimized version
 * Time complexity - O(1)
 * Space complexity - O(1)
 */

// const isPowerOfTwo = (n) => {
//   if (n < 0) {
//     throw new Error('n must be a non-negative integer!');
//   }

//   for (let i = 0; i < n; i++) {
//     const powNumber = Math.pow(2, i);
//     if (powNumber === n) {
//       return true;
//     }

//     if (powNumber > n) {
//       return false;
//     }
//   }

//   return false;
// }

const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

module.exports = () => {
  console.log('isPowerOfTwo(1)', isPowerOfTwo(1))
  console.log('isPowerOfTwo(2)', isPowerOfTwo(2))
  console.log('isPowerOfTwo(5)', isPowerOfTwo(5))
}
