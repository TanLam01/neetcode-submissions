class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let l = 0;
        let result = 0;

        for(let i = 0; i < s.length; i++) {
            while(charSet.has(s[i])) {
                charSet.delete(s[l]);
                l += 1;
            }
            charSet.add(s[i]);
            result = Math.max(result, i - l + 1);
        }

        return result;
    }
}
