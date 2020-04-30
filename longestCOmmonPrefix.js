/**
 * Creator: zhangjun
 * Data: 2020/4/10
 * DESC:
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }else if (strs.length ===1 ){
        return strs[0];
    }else if (strs[0] === ''){
        return '';
    }
    let str = strs[0].split('');
    let localres = '';
    let res = '';
    for (let item of str){
        console.log(item);
        localres+=item;
        for (let strsItem of strs){
            if (!strsItem.startsWith(localres)){
                return res;
            }
        }
        res = localres;
    }
    return res;
};

console.log(longestCommonPrefix(["c","c"]))
