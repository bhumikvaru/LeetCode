/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let newString="";
    let i=0,j=0;
    while(i<word1.length||j<word2.length){
        if(i<word1.length)
        {
            newString=newString+word1[i];
            i++;
        }
        if(j<word2.length)
        {
            newString=newString+word2[j];
            j++;
        }

    }

    return newString;
};