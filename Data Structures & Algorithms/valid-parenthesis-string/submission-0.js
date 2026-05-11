class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let lMin = 0, lMax = 0;

        for(let c of s) {
            if(c === "(") {
                lMin++;
                lMax++;
            } else if(c === ")") {
                lMin--;
                lMax--;
            } else {
                lMin--;
                lMax++;
            }

            if(lMax < 0) {
                return false;
            }
            if(lMin < 0) {
                lMin = 0
            }
        }

        return lMin === 0;
    }
}
