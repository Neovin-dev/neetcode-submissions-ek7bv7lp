class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        if(this.isPalindrome(s)){
            return true;
        }

        for(let i = 0; i < s.length; i++){
            const newStr = s.slice(0, i) + s.slice(i + 1);
            if (this.isPalindrome(newStr)) {
                return true;
            }
        }

        return false

    }

    isPalindrome(str){
        let noSpaceString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        for(let i = 0; i < noSpaceString.length; i++){
            if(noSpaceString.charAt(i) !== noSpaceString.charAt(noSpaceString.length - 1 - i)){
                return false;
            }
        }
        return true;
    }
}
