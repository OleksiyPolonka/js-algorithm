/**
 * Factorial
 * Problem - Give an integer `n`, find the factorial of that integer
 *
 * The factorial of a non-negative integer `n`, denoted n!, is the product
 * of all positive integers less than or equal to `n.`
 * 
 * factorial(4) = 4 * 3 * 2 * 1 = 24
 * factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 * 
 * Time complexity - O(n)
 * Space complexity - O(n)
 */

const factorial = (n) => {
  if (n < 0) {
    throw new Error('n must be a non-negative integer!');
  }

  if (n <= 1) return 1;

  return n * factorial(n - 1)
}

module.exports = () => {
  console.log('factorial(4)', factorial(4))
  console.log('factorial(5)', factorial(5))
}
