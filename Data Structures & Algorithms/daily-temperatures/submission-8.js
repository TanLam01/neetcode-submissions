class Solution {
    dailyTemperatures(temperatures) {
        const t = temperatures.length;
        const stack = [];
        const res = new Array(t).fill(0);

        for(let i = 0; i < t; i++) {
            let currTemp = temperatures[i];

            while(stack.length > 0 && currTemp > temperatures[stack[stack.length - 1]]) {
                const prevInd = stack.pop();
                res[prevInd] = i - prevInd;
            }

            stack.push(i);
        }

        return res;
    }
}