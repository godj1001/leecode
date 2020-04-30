/**
 * Creator: zhangjun
 * Data: 2020/4/18
 * DESC:
 */
var maxArea = function (height) {
    if (height.length <= 1) {
        return 0;
    }
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    while (j>i){
        max = Math.max(max,Math.min(height[i],height[j])*(j-i));
        if (height[i]>height[j]){
            j--;
        }else {
            i++;
        }
    }
    return max;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
