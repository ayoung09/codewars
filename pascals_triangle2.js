/*
Challenge:
Here you will create the classic pascal's triangle. Your function will be passed the depth of the triangle and you code has to return the corresponding pascal triangle upto that depth

The triangle should be returned as a nested array.

for example:
pascal(5) // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together (except for the edges, which are all "1"). eg

*/

function pascal(depth) {
  const triangle = [];

  while (triangle.length < depth) {
    let rowIndex = triangle.length;
    let rowLevel = rowIndex + 1;
    let prevRow = triangle[rowIndex - 1];
    triangle.push(buildRow(rowLevel, prevRow));
  }
  return triangle;
}

function buildRow(rowLevel, prevRow) {
  if (rowLevel === 1) return [1];
  else if (rowLevel === 2) return [1, 1];
  else {
    let rowFront = [1], rowBack = [1], newRow = [];
    for (let i = 0; i <= prevRow.length - 2; i++) {
      newRow.push(prevRow[i] + prevRow[i + 1]);
    }
    return [...rowFront, ...newRow, ...rowBack];
  }
}
