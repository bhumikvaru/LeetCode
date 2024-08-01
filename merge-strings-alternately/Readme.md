
Approach: 
1. Iterate over each string and keep adding the same index element till one finishes.
2. Add the remaining string if any of them still have letters, and the other one fininshed.



Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r


Here: 
            Final String
            -------------
iteration 0: ap
iteration 1: apbq
iteration 2: apbqcr

remaining = string1 ="", string2="".

Final String+ remaining = apbqcr

Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s


Here: 
            Final String
            -------------
iteration 0: ap
iteration 1: apbq (iteration ended since word1 finished its letter)

remaining = string1 ="", string2="rs".

Final String+ remaining = apbqrs
