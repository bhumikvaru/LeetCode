/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let high = candies[0]
    for(let i=0;i<candies.length;i++)
    {
        if(candies[i]>high)
        high = candies[i];
    }
    let result = [];
    for(let i=0;i<candies.length;i++)
    {
        if(candies[i]+ extraCandies>=high)
        result.push(true);
        else
        result.push(false)
    }
    return result;
};