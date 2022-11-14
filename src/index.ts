/**
 * Binary Search of a random sorted array
 *
 * By:      Peter Gemmell
 * Version: 1.0
 * Since:   2022-11-07
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 *
 * Function of BinarySearch
 *
 * @param {number[]} userArray Newly Generated and Sorted Array
 * @param {number} userNumber Number the program is looking for
 * @param {number} lowIndex lowest possible index it can be
 * @param {number} highIndex Highest possible index it can be
 * @returns {number} binarySearch
 */

function binarySearch(
  userArray: number[],
  userNumber: number,
  lowIndex: number,
  highIndex: number
): number {
  // Base Condition
  if (lowIndex > highIndex) {
    return -1
  }

  // Find the middle index
  const middle = Math.floor((lowIndex + highIndex) / 2)

  // Compare mid with given key x

  if (userArray[middle] === userNumber) {
    return middle
  }

  // If element at mid is greater than x,
  // search in the left half of mid
  if (userArray[middle] > userNumber) {
    return binarySearch(userArray, userNumber, lowIndex, middle - 1)
  } else {
    // If element at mid is smaller than x,
    // search in the right half of mid
    return binarySearch(userArray, userNumber, middle + 1, highIndex)
  }
}

const MIN = 1
const MAX = 999
const ARRAY_SIZE = 250

const randomNumberArray = new Array(ARRAY_SIZE)

for (let counter = 0; counter < randomNumberArray.length; counter++) {
  randomNumberArray[counter] = Math.floor(Math.random() * MAX + MIN)
}

randomNumberArray.sort(function (a, b) {
  return a - b
})

// Input
console.log('Binary Search Program')

console.log('Sorted list of numbers: ')

for (let counter = 0; counter < randomNumberArray.length; counter++) {
  process.stdout.write(`${String(randomNumberArray[counter])}, `)
}

console.log('\n')

const numInput = Number(
  prompt(
    'What number are you searching for in the array (integer between 0 and 999): '
  )
)

// Process and Output
console.log(
  `Your number is in index: ${binarySearch(
    randomNumberArray,
    numInput,
    0,
    ARRAY_SIZE - 1
  )}`
)

console.log('\nDone.')
