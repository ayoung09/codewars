/*
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
*/

function permutations(string, path = '') {
  if (string.length === 1) return string;

  for (let i = 0; i < string.length; i++) {

  }
}

function strWithoutCurrentLetter(string, index) {

}
