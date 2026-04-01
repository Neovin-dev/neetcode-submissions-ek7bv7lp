class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let noSpaceString =  s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        // console.log(noSpaceString)
        for(let i = 0; i < noSpaceString.length; i++){
            if(noSpaceString.charAt(i) !== noSpaceString.charAt(noSpaceString.length - 1 - i)){
                return false
            }
        }
        return true;
    }
}
