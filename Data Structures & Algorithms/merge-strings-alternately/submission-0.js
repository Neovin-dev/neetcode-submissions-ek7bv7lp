class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        if(word2.length < 1 && word1.length < 1) return ""
        if(word1.length < 1) return word2;
        if(word2.length < 1) return word1;

        let minLength = word1.length > word2.length ? word2.length : word1.length;
        let remainingLength = word1.length > word2.length ? word1 : word2;
        let newString = ""; 
        for(let i = 0; i < minLength; i++){
            newString = newString + word1.charAt(i) + word2.charAt(i);
        }

        newString += remainingLength.slice(minLength)
        return newString;
    }
}
