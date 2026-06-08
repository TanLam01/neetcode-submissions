class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        const numSet = new Set(nums);

        for(let n of nums) {
            if(!numSet.has(n - 1)) {
                let length = 1;
                while(numSet.has(n + length)) {
                    length++;
                }

                res = Math.max(res, length);
            }
        }

        return res;
    }
}
