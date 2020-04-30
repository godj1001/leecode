/**
 * Creator: zhangjun
 * Data: 2020/4/28
 * DESC:
 */
var singleNumbers = function(nums) {
    let map = new Map();
    for(let item of nums){
        if(map.get(item)){
            map.delete(item)
        }else {
            map.set(item,1);
        }
    }
    return Array.from(map.keys());
};
console.log(singleNumbers([4,1,4,6]))
