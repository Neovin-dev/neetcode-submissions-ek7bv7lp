class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0;
        let j = 0;
        let map = new Map();
        let largestSubstring = 0;

        while (j < s.length) {
            if (map.has(s[j])) {
                i = Math.max(i, map.get(s[j]) + 1);
            }

            map.set(s[j], j);
            largestSubstring = Math.max(largestSubstring, j - i + 1);

            j++;
        }

        return largestSubstring;
    }
}