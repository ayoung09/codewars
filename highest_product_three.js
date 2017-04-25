/*
Interview cake:
Given an array of integers, find the highest product you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
*/

function highestProductOfThree(arr) {
  if (arr.length === 3) {
    return arr.reduce((a, b) => (a * b), 1);
  }

  const highestThree = arr.sort().slice(-3);
  return highestThree.reduce((a, b) => (a * b), 1);
}
