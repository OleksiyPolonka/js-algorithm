/**
 * Prime number
 * Problem - Give a natural number `n`, determine if the number is prime or not
 *
 * A prime number is a natural number greater than 1 that is not a product
 * of two smaller natural numbers
 * 
 * isPrime(1) = false
 * isPrime(5) = true
 * isPrime(4) = false
 * 
 * first implementation
 * Time complexity - O(n)
 * Space complexity - O(1)
 * 
 * optimized implementation
 * Time complexity - O(sqrt(n))
 * Space complexity - O(1)
 */

// const isPrime = (n) => {
//   if (n < 2) {
//     return false;
//   }

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}


module.exports = () => {
  console.log('isPrime(1)', isPrime(1))
  console.log('isPrime(5)', isPrime(5))
  console.log('isPrime(4)', isPrime(4))
}
