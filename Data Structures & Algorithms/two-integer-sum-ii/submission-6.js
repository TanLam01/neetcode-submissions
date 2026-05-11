class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0, r = numbers.length - 1;
        let total = 0;

        while(l < r) {
            total = numbers[l] + numbers[r];

            if(total > target) {
                r--;
            } else if(total < target) {
                l++;
            } else {
                return [l + 1, r + 1]
            }
        }

        return [];
    }
}
