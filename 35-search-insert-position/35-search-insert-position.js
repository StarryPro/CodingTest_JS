/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let middle = Math.floor((start + end)/2);
    
    while(nums[middle] !== target && start <= end){
        if(target < nums[middle]){
            end = middle-1;
        } else {
            start = middle +1;
        }
        middle = Math.floor((start + end)/2);
    }
    if(nums[middle] === target){
        return middle
    }
    return start
};