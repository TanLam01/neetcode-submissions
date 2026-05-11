class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const count = {};
       const freq = Array.from({length: nums.length + 1}, () => []);

       for(let c of nums) {
        count[c] = (count[c] || 0) + 1;
       }

       for(let n in count) {
        freq[count[n]].push(parseInt(n));
       }

       const res = [];
       for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}