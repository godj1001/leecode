/**
 * Creator: zhangjun
 * Data: 2020/4/10
 * DESC:
 */
var lengthOfLongestSubstring = function (s) {
    let length = 0;
    let str = [];
    let sList = s.split('');
    for (let item of sList) {
        if (!str.includes(item)) {
            str.push(item);
        } else {
            let index = str.indexOf(item);
            str.splice(0,index+1);
            str.push(item);
        }
        length = str.length > length ? str.length : length;
    }

    return length;
};
lengthOfLongestSubstring('aab');
