class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     * use backtracking function to do
     * only add open Parentheses if openN < n
     * only add a closing Parentheses if closedN < openN
     * valid if openN === n && closedN === n
     */
    generateParenthesis(n) {
        const stack = [];
        const res = [];

        function backtracking(open, close) {
            if(open === n && close === n) {
                res.push(stack.join(''));
                return;
            }

            if(open < n) {
                stack.push("(");
                backtracking(open + 1, close);
                stack.pop();
            }

            if(close < open) {
                stack.push(")");
                backtracking(open, close + 1);
                stack.pop();
            }
        }

        backtracking(0, 0);
        return res;
    }
}
