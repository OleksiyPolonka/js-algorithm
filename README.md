To run the code, open your terminal and execute the following command:
```
  npm run start
```
select algorithm from prompt and play around with it.

# What Is an Algorithm?
Algorithm - is a set of well-defined instruction to solve a particular problem!

# Characteristics:
 - Well defined inputs and outputs
 - Each step should be clear and unambiguous
 - Language independent

# Algorithm analysis
1. Time complexity - Amount of time taken by an algorithm to run, as a function of input size;
2. Space complexity - amount of memory taken by an algorithm to run, as a function of input size;


# Representing complexity
- Mathematical tools to represent time and space complexity
  1. Big-O Notation (O-notation) - Worst case complexity;
  2. Omega Notation (Ω-notation) - Best case complexity;
  1. Theta Notation (Θ-notation) - Average case complexity;

# Big-O Notation

Big-O Notation describes the complexity oof an algorithm using algebraic terms

It has two important characteristics:
 - it is expressed in terms of the input;
 - it focuses on the bigger picture without getting caught up in the minute details

Big-O Time complexity examples

1. O(n) - linear;
```
  function summation(n) { // n = 4
    let sum = 0; // executes 1

    for (let i = 1; i <= n; i++) {
      sum += i; // // executes 1
    }

    return sum // executes 1
  }

  summation(4) // The total account equal to 4 + 2 - n + 2
```

n + 2 unnecessary to add 2

2. O(1) - constant form
```
  function summation(n) { // n = 4
    return (n * (n + 1)) / 2
  }

  summation(4) // The total account equal to 1
```

3. O(n^2) - Quadratic
```
  for (let i = 0; i <= n; i++) {
    for (let j = 0; i <= n; i++) {
      // code here..
    }
  }
```

4. O(n^3) - Cubic
```
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= n; k++) {
        // code here...
      }
    }
  }
```

3. O(log n) - Logarithmic
```
  Input size reduces by half every iteration
  E.g. Binary search
```

# Space Complexity
1. O(1) - constant form
2. O(n) - linear;
3. O(log n) - Logarithmic


# Objects - Big-O
- Insert - O(1);
- Remove - O(1);
- Access - O(1);
- Search - O(n);
- Object.keys() - O(n);
- Object.values() - O(n);
- Object.entries() - O(n);

```
  const person = {
    firstName: 'name'
  }
```

# Array - Big-O
- Insert/Remove at end - O(1);
- Insert/Remove at beginning - O(n);
- Access - O(1);
- Search - O(n);
- Push/pop - O(1);
- Shift/ unshift/ concat/ slice/ splice - O(n);
- forEach/ map/ filter/ reduce - O(n);

```
  const odd = [1, 3, 5, 7, 9]
```
