
module.exports = function towelSort (matrix) {
  let newArr = [];
  if (matrix === undefined || matrix.length === 0){
    return newArr;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let columnIdx = i % 2 === 0 
        ? j
        : (matrix[i].length - j - 1);
        newArr.push(matrix[i][columnIdx])
    }
  }
  return newArr;
  }
