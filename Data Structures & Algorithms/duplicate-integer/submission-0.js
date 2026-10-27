class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var curr = 0;
        for (let i = 0; i < nums.length; i++) {
            curr = nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                if (curr == nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}
