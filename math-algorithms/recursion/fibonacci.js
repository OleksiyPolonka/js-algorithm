/**
 * Fibonacci sequence
 * Problem - Give a number `n`, find `n` elements of the Fibonacci sequence
 * 
 * The Fibonacci sequence is defined as follows:
 *   - fibonacci(0) = 0
 *   - fibonacci(1) = 1
 *   - For n ≥ 2, fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)
 * the first two numbers in the sequence are 0 and 1.
 * 
 * fibonacci(0) = 0
 * fibonacci(1) = 1
 * fibonacci(6) = 8
 * fibonacci(7) = 13
 *
 *  Note: This implementation uses a naive recursive approach with exponential time complexity.
 *       For improved performance, consider using an iterative approach or memoization.
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n) (due to the recursion call stack)
 */

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}


module.exports = () => console.log('fibonacci', fibonacci(7))
