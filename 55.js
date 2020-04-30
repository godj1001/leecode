/**
 * Creator: zhangjun
 * Data: 2020/4/17
 * DESC:
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length === 0 ){
        return false;
    }else if (nums.length === 1){
        return true
    }
    function jump(m,index) {
        if (m+index>=nums.length){
            return true;
        } else if(m === 0){
            return false;
        }
        console.log(m,index);
        let max = 0;
        let maxIndex = 0;
        for (let i = index+1; i <= index + m; i++) {
            if (nums[i] + i > maxIndex + max) {
                max = nums[i];
                maxIndex = i;
            }
        }
        return  jump(max,maxIndex);
    }
    return jump(nums[0],0);
};
console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
