class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0; 
        let right = heights.length-1;
        let max = 0;

        while(left < right){
            let width = right - left;
            let min = Math.min(heights[left], heights[right]);
            let value = min * width;

            max = Math.max(value, max);

            if(heights[left] > heights[right]){
                right--;
            } else {
                left++;
            }
        }
        return max;
    }
}
