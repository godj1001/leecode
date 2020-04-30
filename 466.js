/**
 * Creator: zhangjun
 * Data: 2020/4/19
 * DESC:
 */
/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
    let s1list = s1.split('');
    let s2list = s2.split('');
    let count1 = 0;
    let count2 = 0;
    let cursor1 = 0;
    let cursor2 = 0;
    let res = 0;
    let arr = [];
    while (count1 !== n1) {
        if (s1list[cursor1] === s2list[cursor2]) {
            cursor2++;
            if (cursor2 === s2list.length) {
                cursor2 = 0;
                count2++;
            }
            if (count2 === n2) {
                res++;
                count2 = 0;
            }
        }
        cursor1++;
        if (cursor1 === s1list.length) {
            count1++;
            cursor1 = 0;
            arr.push(res);
            if (cursor2 === 0 && count2 === 0) {
                break;
            }
        }
    }
    console.log(arr);
    console.log(count1);
    console.log(n1%count1);
    console.log(arr[n1%count1 ]);
    const num = n1 / count1.toFixed(0) * res  ;

    // let arr = [];
    // for (let i = 0; i < n1; i++) {
    //     if (s1list[cursor1] === s2list[cursor2]) {
    //         cursor2++;
    //     }
    // }
    return num;
};

console.log(getMaxRepetitions("niconiconi",
99981,
"nico",
81));
