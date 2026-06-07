class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let res = [];

        for(let i = 0; i < 2; i++) {
            for(let num of nums) {
                res.push(num);
            }
        }

        return res;
    }
}
