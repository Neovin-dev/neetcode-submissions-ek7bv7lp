class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const arr = [];
        for(const num of nums){
            if(map.has(num)){
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        }
        const sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]);
        for (let i = 0; i < k; i++) {
            arr.push(sortedEntries[i][0]);
        }
        return arr;
    }
}
