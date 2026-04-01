class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (nums.length === 0) return 0;

        let l = 0;

        for (let r = 1; r < nums.length; r++) {
            if (nums[l] !== nums[r]) {
                l++;
                nums[l] = nums[r];
            }
        }

        return l + 1;

    }
}
