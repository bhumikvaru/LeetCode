/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let count = 0;
    //only one element will always be sorted
    if (nums.length === 1)
        return true;
    /*     concatnated sorted array should contain 
    the passed array as a subarray        
     */
     let concatnated = [...nums].sort((a,b) => {
         return a - b;
     })
    console.log(nums)
     concatnated = concatnated.concat(concatnated)
     console.log(concatnated)
     for(let i = 0; i< nums.length;i++)
     {
        console.log(concatnated.slice(i,i+nums.length))
        if( concatnated.slice(i, i + nums.length).every((val,index) =>  nums[index] === val))
        {
            return true;
        }
     }
     return false;
}