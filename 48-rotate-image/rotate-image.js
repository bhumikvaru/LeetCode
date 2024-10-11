/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i = 0 ;i< matrix.length;i++)
    {
        for(let j =i;j<matrix[i].length;j++)
        {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i]= temp;
        }
    }
    console.log(matrix)
    for(let i =0;i<matrix.length;i++)
    {
        for(let j=0;j<Math.ceil(matrix[i].length/2);j++)
        {
            let temp = matrix[i][j]; 
            matrix[i][j]= matrix[i][matrix[i].length -1 - j];
            matrix[i][matrix[i].length -1 - j] = temp;
        }
    }
    // console.log(matrix)
};