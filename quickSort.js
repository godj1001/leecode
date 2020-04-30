/**
 * Creator: zhangjun
 * Data: 2020/3/18
 * DESC:
 */
var quickSort = function (nums) {
    quick(nums, 0, nums.length - 1);
    return nums;
}

function quick(num, start, end) {
    if (start >= end) {
        return;
    }
    let left = start;
    let right = end;
    // console.log('left:'+left,'right:'+ right);
    while (left != right) {
        // console.log(num[left],num[right])
        if (num[left] > num[right]) {
            [num[left], num[right]] = [num[right], num[left]];
            left++;
        } else {
            right--;
        }
    }
    quick(num, start, left );
    quick(num, left + 1, end);
}

console.log(quickSort([5, 2, 4, 1, 3]));

var sortArray = function(nums) {
    if (nums.length < 2) return nums;
    return  quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, left, right) {
    if (left >= right) return;
    let pivotIndex = partition(nums, left, right)
    quickSort(nums, left, pivotIndex - 1)
    quickSort(nums, pivotIndex + 1, right)
    return nums;
}

function partition (nums, left, right) {
    let pivot = right;
    let leftIndex = left;
    for (let i = left; i < right; i++) {
        if (nums[i] < nums[pivot]) {
            [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
            leftIndex++;
        }
    }
    [nums[leftIndex], nums[pivot]] = [nums[pivot], nums[leftIndex]];
    return leftIndex;
}
