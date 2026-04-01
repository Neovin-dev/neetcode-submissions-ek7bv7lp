class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let score = [];
        for(let i = 0; i < operations.length; i++){
            if(operations[i] !== "C" && operations[i] !== "D" && operations[i] !== "+"){
                score.push(Number(operations[i]));
            } else if (operations[i] === "C"){
                score.pop();
            } else if(operations[i] === "D"){
                score.push(2 * score[score.length -1]);
            } else if(operations[i] === "+"){
                score.push(score[score.length - 1] + score[score.length - 2]);
            }
        }
        return score.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
}
