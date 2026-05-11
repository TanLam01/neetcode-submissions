class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     * step 1: create an array call pair with [position, speed]
     * step 2: sort decreasing and declare stack
     * step 3: for loop [p, s] with pair
     * step 4: push (target - p) / s to stack
     * step 5: while loop check length >= 2 and length - 1 <= length - 2 -> stack.pop
     * step 6: return stack.length
     */
    carFleet(target, position, speed) {
        const pair = position.map((p, i) => [p, speed[i]]);
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
