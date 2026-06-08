class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);

        // Prefix
        for(let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        // Postfix
        let postFix = 1;
        for(let i = n - 1; i >= 0; i--) {
            res[i] *= postFix;
            postFix *= nums[i];
        }

        return res;
    }
}
