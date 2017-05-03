/*Problem:
Write a function that takes a string of brackets/parentheses and returns a boolean representing whether the brackets/parentheses are properly closed
*/

function bracketChecker(str) {
  const bracketStack = [];
  const bracketPairs = { '(' : ')', '[' : ']', '{' : '}'};
  const openBrackets = Object.keys(bracketPairs);
  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      bracketStack.push(str[i]);
    }
    else {
      const lastInStack = bracketStack[bracketStack.length - 1];
      if (str[i] === bracketPairs[lastInStack]) {
        bracketStack.pop();
      }
      else return false;
    }
  }
  return bracketStack.length === 0;
}

console.log(bracketChecker('(){}'));
console.log(bracketChecker('([]){(())}'));
console.log(bracketChecker(')('));
