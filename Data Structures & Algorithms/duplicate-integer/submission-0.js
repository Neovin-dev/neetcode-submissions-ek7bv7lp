class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // one way to do is sort and check corresponding indexes
    // 2 pass approach

    hasDuplicate(nums) {
        let seen = new Set();
        for(let num of nums){
            if(seen.has(num)){
                return true;
            } else {
                seen.add(num);
            }
        }
        return false;
    }
}
