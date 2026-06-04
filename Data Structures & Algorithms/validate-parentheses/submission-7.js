class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const openToClosed = {
            "}" : "{",
            "]" : "[",
            ")" : "("
        }

        for(let c of s) {
            if(openToClosed[c]) {
                if(stack.length > 0 && stack[stack.length - 1] === openToClosed[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
