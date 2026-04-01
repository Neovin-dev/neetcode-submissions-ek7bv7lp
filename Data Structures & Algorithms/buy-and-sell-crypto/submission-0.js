class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length === 1) return 0;
        let i = 0;
        let j = 1;
        let maxDiff = 0;
        while(j < prices.length){
            if(prices[j] > prices[i]){
                let profit = prices[j] - prices[i];
                maxDiff= Math.max(maxDiff, profit);
            } else {
                i = j;
            }
            j++
        }
        return maxDiff;
    }
}
