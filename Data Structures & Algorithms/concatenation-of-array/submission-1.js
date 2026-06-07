class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let res = [...nums];
        res.push([...nums]);
        return res;
    }
}
