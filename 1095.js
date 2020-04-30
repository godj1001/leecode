/**
 * Creator: zhangjun
 * Data: 2020/4/29
 * DESC:
 */
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
    const length = mountainArr.length();
    function get(mid,left,right) {
        let midValue = mountainArr.get(mid);
        let leftValue = mountainArr.get(left);
        let rightValue = mountainArr.get(right);
        if (target>=leftValue&&target<=midValue){
            const localMid = ((left+mid)/2).toFixed(0);
            get(localMid,left,mid);
        }else if (target<=rightValue&&target>midValue ) {
            const localMid = ((right+mid)/2).toFixed(0);
            get(localMid,mid+1,right);
        } else {
            const localMid = ((left+mid)/2).toFixed(0);
            get(localMid,left,mid);
        }
    }
};
// console.log(findInMountainArray([1, 2, 3, 4], 3))
