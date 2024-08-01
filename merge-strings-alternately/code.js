/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

//Approach 1:
var mergeAlternately = function(word1, word2) {
    let newString="";
    let i=0,j=0;
    for(;i<word1.length&&j<word2.length;i++,j++){
        newString= newString+word1[i]+word2[j];
    }
    if(i<word1.length)
    newString=newString+word1.substring(i,word1.length);
    else if(j<word2.length)
    newString= newString+word2.substring(j,word2.length);
    return newString;
};
