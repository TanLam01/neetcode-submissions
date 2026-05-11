class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    alphaNumb(c) {
        return (
            (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            (c >= '0' && c <= '9')
        );
    }

    isPalindrome(s) {
        let l = 0, r = s.length - 1;

        while(l < r) {
            while(l < r && !this.alphaNumb(s[l])) {
                l++
            }
            while(r > l && !this.alphaNumb(s[r])) {
                r--;
            }

            if(s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
