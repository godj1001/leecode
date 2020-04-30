/**
 * Creator: zhangjun
 * Data: 2020/4/12
 * DESC:
 */
var intersection = function (start1, end1, start2, end2) {
    let l1x = (start1[0] - end1[0]);
    let l1y = (start1[1] - end1[1]);
    let l2x = (start2[0] - end2[0]);
    let l2y = (start2[1] - end2[1]);
    if (l1x === 0 && start2[0] <= start1[0] && end2[0] >= start1[0]) {
        let a2 = l2y / l2x;
        let b2 = start2[1] - a2 * start2[0];
        return [start1[0], a2 * start1[0] + b2];
    } else if (l2x === 0 && start1[0] <= start2[0] && end1[0] >= start2[0]) {
        let a1 = l1y / l1x;
        let b1 = start1[1] - a1 * start1[0];
        return [start2[0], a1 * start2[0] + b1];
    }
    let a1 = l1y / l1x;
    let a2 = l2y / l2x;
    let b1 = start1[1] - a1 * start1[0];
    let b2 = start2[1] - a2 * start2[0];
    if (a1 === a2 && b1 === b2) {
        if (Math.max(start1[0], end1[0]) >= Math.min(start2[0], end2[0]) || Math.min(start1[0], end1[0]) >= Math.max(start2[0], end2[0])) {
            console.log(a1 * Math.max(start1[0], start2[0]) + b1);
            return [Math.max(start1[0], start2[0]), a1 * Math.max(start1[0], start2[0]) + b1]
        }
    }
    let x = (b2 - b1) / (a1 - a2);
    console.log(a1,b1)
    let y = a1 * x + b1;
    if (x >= Math.min(start1[0], end1[0]) && x <= Math.max(start1[0], end1[0]) && y >= Math.min(start1[1], end1[1]) && y <= Math.max(start1[1], end1[1]) && x >= Math.min(start2[0], end2[0]) && x <= Math.max(start2[0], end2[0]) && y >= Math.min(start2[1], end2[1]) && y <= Math.max(start2[1], end2[1])) {
        return [x, y];
    } else {
        return [];
    }

};
console.log(
    'asdd'.includes('as')
)
let a = 'as';
let reg = new RegExp('\\'+a)
console.log(intersection([0, 0], [0, 1], [0, 2], [0, 3]));
// console.log(intersection([0, 0], [3, 3], [1, 1], [2, 2]));
// console.log(intersection([0, 0], [3, 3], [1, 0], [1, 2]));
