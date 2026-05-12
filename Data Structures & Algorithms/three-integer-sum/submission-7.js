class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}[]
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];
        const n = nums.length;

        for(let i = 0; i < n; i++) {
            if(nums[i] > 0) break;
            if(i > 0 && nums[i - 1] === nums[i]) continue;

            let l = i + 1, r = n - 1;
            while(l < r) {
                let currSum = nums[i] + nums[l] + nums[r];

                if(currSum < 0) {
                    l++;
                } else if(currSum > 0) {
                    r--;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while(l < r && nums[l - 1] === nums[l]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}