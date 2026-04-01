class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let newArray = nums;
        newArray = newArray.concat(nums)
        return newArray;
    }
}
