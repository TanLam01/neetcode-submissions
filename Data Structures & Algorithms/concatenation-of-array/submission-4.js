class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [...nums]
        ans.push([...nums])
        return ans
    }
}
