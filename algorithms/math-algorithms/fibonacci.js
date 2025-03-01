/**
 * Fibonacci sequence
 * Problem - Give a number `n`, find `n` elements of the Fibonacci sequence
 * the Fibonacci sequence is a sequence in which each number is the sum if the
 * two preceding ones.
 * 
 * the first two numbers in the sequence are 0 and 1.
 * 
 * fibonacci(2) = [0, 1]
 * fibonacci(3) = [0, 1, 1]
 * fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]
 * 
 * Time complexity - O(n)
 * Space complexity - O(n)
 */

const fibonacci = (n) => {
  if (n < 0) {
    throw Error('n must be a non-negative integer!')
  }

  if (n === 0) return []
  if (n === 1) return [0]

  const fib = [0, 1];
  
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }

  return fib;
}


module.exports = () => console.log('fibonacci', fibonacci(6))
