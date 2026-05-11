class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        let numSet = new Set(nums);

        for(let num of nums) {
            if(!numSet.has(nums - 1)){
                let length = 1;
                while(numSet.has(num + length)){
                    length++;
                }
                res = Math.max(res, length);
            }
        }

        return res;
    }
}
