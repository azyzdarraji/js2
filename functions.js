// =========================================================
// JavaScript Functions Checkpoint
// Run with: node functions.js
// =========================================================


// =========================================================
// 1. STRING MANIPULATION FUNCTIONS
// =========================================================

/**
 * Reverse a String
 * Reads the string from the last character to the first.
 * Example: reverseString("hello") -> "olleh"
 */
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];            // add each character, starting from the end
    }
    return reversed;
    // Short version: return str.split("").reverse().join("");
}

/**
 * Count Characters
 * Returns the number of characters in a string (spaces included).
 * Example: countCharacters("hello world") -> 11
 */
function countCharacters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;                       // one more character
    }
    return count;
    // Short version: return str.length;
}

/**
 * Capitalize Words
 * Puts the first letter of each word in uppercase.
 * Example: capitalizeWords("hello world from js") -> "Hello World From Js"
 */
function capitalizeWords(sentence) {
    const words = sentence.split(" ");             // "hello world" -> ["hello", "world"]

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {                 // skip empty words (double spaces)
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(" ");                        // ["Hello", "World"] -> "Hello World"
}


// =========================================================
// 2. ARRAY FUNCTIONS
// =========================================================

/**
 * Find Maximum
 * Returns the biggest number of the array (undefined if the array is empty).
 * Example: findMax([3, 9, 1, 7]) -> 9
 */
function findMax(numbers) {
    if (numbers.length === 0) return undefined;

    let max = numbers[0];              // start with the first number
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];          // found a bigger number
        }
    }
    return max;
    // Short version: return Math.max(...numbers);
}

/**
 * Find Minimum
 * Returns the smallest number of the array (undefined if the array is empty).
 * Example: findMin([3, 9, 1, 7]) -> 1
 */
function findMin(numbers) {
    if (numbers.length === 0) return undefined;

    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];          // found a smaller number
        }
    }
    return min;
    // Short version: return Math.min(...numbers);
}

/**
 * Sum of Array
 * Adds all the numbers of the array (0 for an empty array).
 * Example: sumArray([1, 2, 3, 4]) -> 10
 */
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
    // Short version: return numbers.reduce((total, n) => total + n, 0);
}

/**
 * Filter Array
 * Keeps only the elements for which the condition function returns true.
 * The condition is a function given as a parameter (a "callback").
 * Example: filterArray([1, 2, 3, 4], n => n % 2 === 0) -> [2, 4]
 */
function filterArray(arr, condition) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {       // ask the condition: keep this element?
            result.push(arr[i]);
        }
    }
    return result;
    // Short version: return arr.filter(condition);
}


// =========================================================
// 3. MATHEMATICAL FUNCTIONS
// =========================================================

/**
 * Factorial
 * n! = 1 x 2 x 3 x ... x n, and 0! = 1.
 * Example: factorial(5) -> 120
 */
function factorial(n) {
    if (n < 0) return undefined;       // no factorial for negative numbers

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**
 * Prime Number Check
 * A prime number has exactly two divisors: 1 and itself (2, 3, 5, 7, 11...).
 * We only test divisors up to the square root of n: it is enough and faster.
 * Example: isPrime(7) -> true, isPrime(9) -> false
 */
function isPrime(n) {
    if (n < 2) return false;           // 0 and 1 are not prime

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;              // found a divisor: not prime
        }
    }
    return true;
}

/**
 * Fibonacci Sequence
 * Each number is the sum of the two previous ones: 0, 1, 1, 2, 3, 5, 8...
 * Returns the first `terms` numbers of the sequence.
 * Example: fibonacci(7) -> [0, 1, 1, 2, 3, 5, 8]
 */
function fibonacci(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];

    const sequence = [0, 1];
    while (sequence.length < terms) {
        const last = sequence[sequence.length - 1];
        const beforeLast = sequence[sequence.length - 2];
        sequence.push(last + beforeLast);
    }
    return sequence;
}


// =========================================================
// TESTS
// =========================================================

console.log("--- Strings ---");
console.log(reverseString("hello"));                    // "olleh"
console.log(countCharacters("hello world"));            // 11
console.log(capitalizeWords("hello world from js"));    // "Hello World From Js"

console.log("--- Arrays ---");
const numbers = [3, 9, 1, 7, 4];
console.log(findMax(numbers));                          // 9
console.log(findMin(numbers));                          // 1
console.log(sumArray(numbers));                         // 24
console.log(filterArray(numbers, n => n % 2 === 0));    // [4]  (even numbers)
console.log(filterArray(numbers, n => n > 3));          // [9, 7, 4]

console.log("--- Math ---");
console.log(factorial(5));                              // 120
console.log(factorial(0));                              // 1
console.log(isPrime(7));                                // true
console.log(isPrime(9));                                // false
console.log(isPrime(1));                                // false
console.log(fibonacci(10));                             // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
