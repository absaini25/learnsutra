# Longest common subsequence
Given two strings `text1` and `text2`, return *the length of their longest common subsequence. *If there is no common subsequence, return `0`.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

-   For example, `"ace"` is a subsequence of `"abcde"`.

A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:

Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

Constraints:

-   `1 <= text1.length, text2.length <= 1000`
-   `text1` and `text2` consist of only lowercase English characters.

### Solution

---

### Python Code with Comments
```python
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        # Get the lengths of the two input strings
        m, n = len(text1), len(text2)

        # Initialize a cache for memoization.
        # cache[i][j] stores the LCS length for text1[i:] and text2[j:].
        # Using None to differentiate between uncomputed values and computed results.
        cache = [[None] * n for _ in range(m)]
        
        # Recursive helper function to compute the LCS length
        def computeMaxLen(i: int, j: int) -> int:
            # Base case: If either string is fully processed, LCS length is 0
            if i == m or j == n:
                return 0
            
            # If the result for this state is already computed, return it
            if cache[i][j] is not None:
                return cache[i][j]
            
            # If characters match, increment the LCS length and move diagonally
            if text1[i] == text2[j]:
                cache[i][j] = 1 + computeMaxLen(i + 1, j + 1)
            else:
                # Otherwise, take the maximum of two possibilities:
                # 1. Skip the current character in text1
                # 2. Skip the current character in text2
                cache[i][j] = max(computeMaxLen(i + 1, j), computeMaxLen(i, j + 1))
                
            return cache[i][j]
        
        # Start the computation from the beginning of both strings
        return computeMaxLen(0, 0)
```
With @cache annotation from `functools` module.

```python
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        
        @cache
        def computeMaxLen(i: int, j: int) -> int:
            if i == m or j == n:
                return 0
            
            if(text1[i] == text2[j]):
                return 1 + computeMaxLen(i + 1, j + 1)
            else:
                return max(computeMaxLen(i + 1, j), computeMaxLen(i, j + 1))
                        
        return computeMaxLen(0, 0)
```

---

### Java Code with Comments
```java
class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length(); // Get the length of the first string
        int n = text2.length(); // Get the length of the second string
        
        // Initialize a 2D array for memoization.
        // cache[i][j] stores the LCS length for text1.substring(i) and text2.substring(j).
        Integer[][] cache = new Integer[m][n];
        
        // Helper function to compute the LCS length recursively
        return computeMaxLen(0, 0, text1, text2, cache);
    }

    private int computeMaxLen(int i, int j, String text1, String text2, Integer[][] cache) {
        // Base case: If either string is fully processed, LCS length is 0
        if (i == text1.length() || j == text2.length()) {
            return 0;
        }

        // If the result for this state is already computed, return it
        if (cache[i][j] != null) {
            return cache[i][j];
        }

        // If characters match, increment the LCS length and move diagonally
        if (text1.charAt(i) == text2.charAt(j)) {
            cache[i][j] = 1 + computeMaxLen(i + 1, j + 1, text1, text2, cache);
        } else {
            // Otherwise, take the maximum of two possibilities:
            // 1. Skip the current character in text1
            // 2. Skip the current character in text2
            cache[i][j] = Math.max(
                computeMaxLen(i + 1, j, text1, text2, cache),
                computeMaxLen(i, j + 1, text1, text2, cache)
            );
        }

        return cache[i][j];
    }
}
```

---

### **Explanation of the Approach**
- **Recursive with Memoization**:
    - The solution uses a recursive function to explore all possible subsequences of the two strings.
    - A 2D cache is used to store intermediate results to avoid redundant computations.
    - If the characters at the current indices match, the length of the LCS increases by 1, and we move diagonally in the two strings.
    - If the characters don’t match, we explore the possibilities of skipping a character in either string and take the maximum.

- **Time Complexity**: \(O(m \times n)\)
    - Each state \((i, j)\) is computed only once, and there are \(m \times n\) states.
- **Space Complexity**: \(O(m \times n)\)
    - For the cache. Additionally, recursion depth is \(O(m + n)\).