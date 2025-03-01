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
 * Space complexity - O(1)
 */

const factorial = (n) => {
  if (n < 0) {
    throw new Error('n must be a non-negative integer!');
  }

  if (n <= 1) return 1;

  for (let i = n - 1; i > 0; i--) {
    n *= i;
  }

  return n
}

module.exports = () => console.log('factorial', factorial(4))
