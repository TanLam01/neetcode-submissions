class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     * 
     *  const count = {};
        let res = 0;
        let l = 0, maxf = 0;

        for(let r = 0; r < s.length; r++) {
            count[s[r]] = (count[s[r]] || 0) + 1;
            maxf = Math.max(maxf, count[s[r]]);

            while((r - l + 1) - maxf > k) {
                count[s[l]]--;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }

        return res;
    */

    characterReplacement(s, k) {
        const count = {};
        let l = 0, res = 0, maxf = 0;

        for(let r = 0; r < s.length; r++) {
            count[s[r]] = (count[s[r]] || 0) + 1;
            maxf = Math.max(maxf, count[s[r]]);

            while((r - l + 1) - maxf > k) {
                count[s[l]]--;
                l++;
            }

            res = Math.max(res, (r - l + 1));
        }

        return res;
    }
}
