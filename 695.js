/**
 * Creator: zhangjun
 * Data: 2020/3/16
 * DESC:
 */
var maxAreaOfIsland = function (grid) {
    max = 0;
    iLength = grid.length;
    jLength = grid[0].length;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) {
                continue;
            }
            let localmax = getMax(i, j);
            max = localmax > max ? localmax : max;
        }
    }
    return max;

    function getMax(i, j) {
        if (i == iLength || j == jLength || i < 0 || j < 0) return 0;
        if (grid[i][j] == 0) {
            return 0;
        }
        grid[i][j] = 0;
        return 1 + getMax(i + 1, j) + getMax(i, j + 1) + getMax(i-1,j)+getMax(i,j-1);
    }
};

// console.log(maxAreaOfIsland([[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]]));
// console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
// ))
console.log(maxAreaOfIsland([[0,1],[1,1]]));
