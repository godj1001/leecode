/**
 * Creator: zhangjun
 * Data: 2020/4/16
 * DESC:
 */
var merge = function (intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    let arr = [];
    intervals.sort((a, b) => {
        return a[0] - b[0]
    });
    let item = intervals[0];


    for (let i = 1; i < intervals.length; i++) {
        if (item[1] >= intervals[i][0]) {
            item[1] = Math.max(item[1],intervals[i][1]);
        } else {
            arr.push(item);
            item = intervals[i];

        }
        if (i === intervals.length - 1) {
            arr.push(item);
        }
    }
    return arr;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
