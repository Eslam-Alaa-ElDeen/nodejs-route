/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let minEle = strs[0];
    for (let index = 1; index < strs.length; index++) {
        if (minEle.length > strs[index].length) {
            minEle = strs[index];
        }
    }
    let res = "";
    for (let i = 0; i < minEle.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (minEle[i] !== strs[j][i]) {
                return res;
            }
        }
        res += minEle[i];
    }
    return res;
};