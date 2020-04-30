/**
 * Creator: zhangjun
 * Data: 2020/4/10
 * DESC:
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};

console.log(reverseWords('a good   example'));
