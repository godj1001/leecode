/**
 * Creator: zhangjun
 * Data: 2020/4/20
 * DESC:
 */
/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;

    function setZero(i, j) {
        console.log(i, j)
        if (i >= grid.length || i < 0 || j >= grid[0].length || j < 0) {
            return;
        }
        if (grid[i][j] === '0') {
            return;
        } else {
            grid[i][j] = '0';
            // setZero(i - 1, j);
            // setZero(i, j - 1);
            setZero(i, j + 1);
            setZero(i + 1, j);
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '0') continue;
            count++;
            setZero(i, j);
        }
    }
    return count;
};

console.log(numIslands([['1']]));
