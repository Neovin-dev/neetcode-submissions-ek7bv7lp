class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stash = [];
        for(let i = 0; i < tokens.length; i++){
            if(tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/"){
                let val2 = stash.pop();
                let val1 = stash.pop();
                if(tokens[i] === "+"){
                    stash.push(val1 + val2);
                } else if(tokens[i] === "-"){
                    stash.push(val1 - val2);
                } else if(tokens[i] === "*"){
                    stash.push(val1 * val2);
                } else {
                    stash.push(Math.trunc(val1 / val2));
                }
            } else {
                stash.push(Number(tokens[i]));
            }
        }
        return stash.pop();
    }
}
