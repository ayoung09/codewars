/*
Interview cake:
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Do not use division in your solution.
*/

function getProductsOfAllIntsExceptAtIndex(arr) {
  return arr.map((num, index) => {
    return productOfSubArray(arr.slice(0, index)) * productOfSubArray(arr.slice(index + 1));
  });
}

function productOfSubArray(arr) {
  return arr.reduce((a, b) => (a * b), 1);
}
