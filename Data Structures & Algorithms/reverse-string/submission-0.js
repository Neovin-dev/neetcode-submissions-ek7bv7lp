class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let x = Math.floor(s.length/2);
        for(let i = 0; i < x; i++){
            let a = s[i];
            s[i] = s[s.length - 1 - i];
            s[s.length - 1 - i] = a;
        }
    }
}
