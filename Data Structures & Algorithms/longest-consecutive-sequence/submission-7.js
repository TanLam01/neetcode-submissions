class Solution {
    /**
     * @param {number[]} numsList
     * @return {number}
     */
    longestConsecutive(numsList) {
        let longest = 0;
        const NumSet = new Set(numsList);

        for (let num of NumSet) {
            const isMidSequence = NumSet.has(num-1);
            if (isMidSequence) {
                continue;
            }
            let length = 1;
            let currentNum = num;
            while (NumSet.has(currentNum + 1)) {
                currentNum++;
                length++;
            }
            longest = Math.max(length, longest);
        }

        return longest;
    }
}


