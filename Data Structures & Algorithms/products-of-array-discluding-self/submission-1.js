class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let noOfZeroes = 0;
        let totalProduct = 1;
        let indexOfZero = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 0){
                noOfZeroes++;
                indexOfZero = i;
            } else {
                totalProduct *= nums[i];
            }
        }
        let resultNums = [];
        if(noOfZeroes >= 2) {
            return new Array(nums.length).fill(0);
        } else if(noOfZeroes === 1){
            let arr = new Array(nums.length).fill(0);
            arr[indexOfZero] = totalProduct;
            return arr;
        } else {
            for(let i = 0; i < nums.length; i++){
                if(nums[i] !== 0) resultNums[i] = totalProduct/(nums[i]);
                else resultNums[i] = totalProduct/(nums[i]);
            }
        }
        return resultNums;
    }
}
