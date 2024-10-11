/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let left = 0, right = matrix[0].length - 1;
    let bottom = matrix.length - 1, top = 0;
    let results = [];
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            results.push(matrix[top][i])
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            results.push(matrix[i][right])
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                results.push(matrix[bottom][i])
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                results.push(matrix[i][left])
            }
            left++;
        }
    }
    return results
};