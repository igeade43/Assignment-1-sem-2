// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================

/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers between 1 and a destination.
 * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
 */
export function sumOfNumbersTo(destination) {
  // Using the formula n(n+1)/2
  return (destination * (destination + 1)) / 2
}

/**
 * Challenge - 2
 *
 * Calculate count, sum and put each even number in an array, from 0 to a destination.
 */
export function evenNumbersWithin(destination) {
  const arrayOfEvenNumbers = []
  for (let i = 0; i <= destination; i++) {
    if (i % 2 === 0) arrayOfEvenNumbers.push(i)
  }
  return {
    count: arrayOfEvenNumbers.length,
    sum: arrayOfEvenNumbers.reduce((a, b) => a + b, 0),
    arrayOfEvenNumbers,
  }
}

/**
 * Challenge - 3
 *
 * Convert each Celsius number to Fahrenheit (truncated).
 */
export function celsiusToFahrenheit(arrayOfNumbers) {
  return arrayOfNumbers.map(c =>
    Math.trunc((c * 9) / 5 + 32)
  )
}

/**
 * Challenge - 4
 *
 * Count, sum, and store odd numbers up to destination.
 */
export function oddNumbersWithin(destination) {
  const arrayOfOddNumbers = []
  for (let i = 0; i <= destination; i++) {
    if (i % 2 !== 0) arrayOfOddNumbers.push(i)
  }
  return {
    count: arrayOfOddNumbers.length,
    sum: arrayOfOddNumbers.reduce((a, b) => a + b, 0),
    arrayOfOddNumbers,
  }
}

/**
 * Challenge - 5
 *
 * Find numbers that are multiples of a given factor.
 */
export function findMultiples(arrayOfNumbers, factor) {
  const arrayOfMultiples = arrayOfNumbers.filter(num => num % factor === 0)
  return {
    count: arrayOfMultiples.length,
    sum: arrayOfMultiples.reduce((a, b) => a + b, 0),
    arrayOfMultiples,
  }
}

/**
 * Challenge - 6
 *
 * Factorials of numbers (negative → 0, 0! = 1).
 */
export function calculateFactorials(arrayOfNumbers) {
  function factorial(n) {
    if (n < 0) return 0
    if (n === 0 || n === 1) return 1
    let result = 1
    for (let i = 2; i <= n; i++) result *= i
    return result
  }
  return arrayOfNumbers.map(num => factorial(num))
}

/**
 * Challenge - 7
 *
 * Find prime numbers in an array.
 */
export function findPrimeNumbers(arrayOfNumbers) {
  function isPrime(n) {
    if (n <= 1) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false
    }
    return true
  }
  const arrayOfPrimes = arrayOfNumbers.filter(isPrime)
  return {
    count: arrayOfPrimes.length,
    sum: arrayOfPrimes.reduce((a, b) => a + b, 0),
    arrayOfPrimes,
  }
}

/**
 * Challenge - 8
 *
 * Double the values of an array.
 */
export function doubleTheValues(arrayOfNumbers) {
  return arrayOfNumbers.map(num => num * 2)
}

// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================
