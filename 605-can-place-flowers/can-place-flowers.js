/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count_available = 0;
    if(flowerbed[0] === 0 && flowerbed[1]===0)
    {
        flowerbed[0]=1;
        count_available+=1;
    }
    if(flowerbed.length ===1 && flowerbed[0]===0 && n===1) return true;
    if(flowerbed.length ===1 &&flowerbed[0]===1 && n>0) return false;

        if(flowerbed[flowerbed.length-2] === 0 && flowerbed[flowerbed.length-1]===0)
    {
        flowerbed[flowerbed.length-1]=1;
        count_available+=1;
    }
    for(let i=1;i<flowerbed.length-1;i++)
    {
        if(flowerbed[i-1] ===0 && flowerbed[i+1]===0 && flowerbed[i] === 0) {count_available+=1;
        flowerbed[i]=1;}
    }
    console.log(flowerbed)
    console.log(count_available)
    if(count_available >= n) return true;
    return false;
};