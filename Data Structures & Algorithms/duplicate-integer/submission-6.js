class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newSet = new Set();

        for(const n of nums) {
            if(newSet.has(n)) {
                return true
            }
            newSet.add(n);
        }

        return false;
    }
}
