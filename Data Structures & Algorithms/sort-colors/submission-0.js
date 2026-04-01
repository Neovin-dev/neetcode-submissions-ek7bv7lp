class Solution {
    sortColors(nums) {
        let zero = 0;
        let one = 0;
        let two = 0;

        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 0){
                zero++;
            } else if(nums[i] === 1){
                one++;
            } else {
                two++;
            }
        }

        for(let i = 0; i < nums.length; i++){
            if(zero > 0){
                nums[i] = 0;
                zero--;
            } else if(one > 0){
                nums[i] = 1;
                one--;
            } else {
                nums[i] = 2;
                two--;
            }
        }
    }
}