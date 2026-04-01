class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const count = new Map();

        for(let i = 0; i < nums.length; i++){
            count.set(nums[i], (count.get(nums[i]) || 0) + 1);
        }

        const res = [];
        for(const [key, value] of count.entries()){
            if(value > Math.floor(nums.length / 3)) {
                res.push(key);
            }
        }
        return res;
    }
}
