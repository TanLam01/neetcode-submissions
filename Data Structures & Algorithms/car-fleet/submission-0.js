class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     * step 1: create an array call pair with [position, speed]
     * step 2: sort decreasing and declare stack
     * step 3: 
     */
    carFleet(target, position, speed) {
        let pair = position.map((p, i) => [p, speed[i]]);
        pair.sort((a, b) => b[0] - a[0]);
        const stack = [];

        for(let [p, s] of pair) {
            stack.push((target - p) / s);
            if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }

        return stack.length;
    }
}
