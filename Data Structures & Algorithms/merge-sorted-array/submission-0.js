class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        for(let i = nums1.length - nums2.length ; i < nums1.length; i++){
            nums1[i] = nums2[i - (nums1.length - nums2.length)]
        }
        nums1.sort((a, b) => a - b);
    }
}
