/**
 * Creator: zhangjun
 * Data: 2020/4/21
 * DESC:
 */
// var numberOfSubarrays = function (nums, k) {
//     let newArr = nums.map(item => {
//         if (item % 2 !== 0) {
//             return 1;
//         } else {
//             return 0;
//         }
//     });
//     let count = 0;
//     let second = 0;
//     let first = k-1;
//     let length = newArr.slice(0, k).reduce(function (a, b) {
//         return a + b
//     }, 0);
//     while (first < nums.length) {
//         if (length === k) {
//             count++;
//             length-=newArr[second];
//             second++;
//         } else if (length < k) {
//             first++;
//             length+=newArr[first];
//         }else if(length>k){
//             length-=newArr[second];
//             second++;
//         }
//     }
//     return count;
// };

const numberOfSubarrays = (nums, k) => {
    let n = nums.length, counts = new Array(n+1).fill(0).fill(1, 0, 1), oddCount = 0, result = 0
    console.log(counts);
    for (let i = 0; i < n; i++) {
        console.log('oddCount',oddCount);
        console.log(counts);
        console.log(result);
        oddCount += nums[i] & 1;
        result += oddCount >= k ? counts[oddCount - k] : 0
        counts[oddCount] += 1
    }
    console.log(counts)
    return result
}

console.log(numberOfSubarrays(  [2,2,2,1,2,2,1,2,2,2], 2));
