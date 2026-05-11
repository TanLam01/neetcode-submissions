class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const prevMap = new Map();

        for(const n of nums) {
            if(prevMap.has(n)) {
                return true;
            }
            prevMap.set(n);
        }

        return false;
    }
}
