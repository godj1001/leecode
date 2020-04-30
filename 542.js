/**
 * Creator: zhangjun
 * Data: 2020/4/15
 * DESC:
 */
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 1) {
                if (i > 0 && j === 0) {
                    matrix[i][j] = matrix[i - 1][j] + 1
                } else if (j > 0 && i === 0) {
                    matrix[i][j] = matrix[i][j - 1] + 1
                } else if (i > 0 && j > 0) {
                    matrix[i][j] = 1 + Math.min(matrix[i - 1][j], matrix[i][j - 1])
                } else {
                    matrix[i][j] = Infinity
                }
            }
        }
    }
    for (let i = row - 1; i >= 0; i--) {
        for (let j = col - 1; j >= 0; j--) {
            if (matrix[i][j] > 0) {
                if (i < row - 1 && j === col - 1) {
                    matrix[i][j] = Math.min(matrix[i][j], matrix[i + 1][j] + 1)
                }
                if (j < col - 1 && i === row - 1) {
                    matrix[i][j] = Math.min(matrix[i][j], matrix[i][j + 1] + 1)
                }
                if (i < row - 1 && j < col - 1) {
                    matrix[i][j] = Math.min(matrix[i][j], matrix[i][j + 1] + 1, matrix[i + 1][j] + 1)
                }
            }
        }
    }
    return matrix
};

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]));
