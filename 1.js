/**
 * Creator: zhangjun
 * Data: 2020/4/15
 * DESC:
 */
// var twoSum = function(nums, target) {
//     nums.sort((a,b)=>{return a-b});
//     console.log(nums);
//     let start = 0;
//     let end = nums.length-1;
//     while(start<end){
//         console.log(nums[start],nums[end]);
//         if(nums[start]+nums[end]=== target){
//             return [start,end];
//         }else if(nums[start]+nums[end]>target){
//             end--;
//         }else if(nums[start]+nums[end]<target){
//             start++;
//         }
//     }
//     return [];
// };
//
// console.log(twoSum([2,7,11,15],9))
//
// let a = [1,2,3,[1,2],4];
// let b = [].concat(a);
// let c = new Array(a);
// let d = a.reduce((arr,b)=>{
//     if (Array.isArray(b)){
//         b = [].concat(b);
//     }
//     arr.push(b);
//     return arr;
// },[]);
//
// console.log(d)
//
//
// a[3][0] = 3;
//
// console.log(d)

let a = {
    name: 1,
    age:1
}
const handler = {
    set: function() {
        console.log('A value has been accessed');
    },
}

let b = new Proxy(a,handler);

b.c = 1;
console.log(b);
