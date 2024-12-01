# Maximal square in a matrix

Given an `m x n` binary `matrix` filled with `0`'s and `1`'s, *find the largest square containing only* `1`'s *and return its area*.

Example 1:

Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4

Example 2:

Input: matrix = [["0","1"],["1","0"]]
Output: 1

Example 3:

Input: matrix = [["0"]]
Output: 0

Constraints:

-   `m == matrix.length`
-   `n == matrix[i].length`
-   `1 <= m, n <= 300`
-   `matrix[i][j]` is `'0'` or `'1'`.

### Solution

Here’s the code with proper comments and its equivalent Java implementation:

---

### Python Code with Comments:
```python
from functools import cache
from typing import List

class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        # Initialize the maximum length of a square and dimensions of the matrix
        maxLen, m, n = 0, len(matrix), len(matrix[0])
        
        @cache  # Cache results for overlapping subproblems
        def maxSquareAtIndex(i: int, j: int) -> int:
            """
            Recursive function to compute the largest square with bottom-right corner at (i, j).
            Returns the side length of the square.
            """
            nonlocal maxLen  # Allows us to update the maxLen variable from the outer scope
            
            # Base case: Out of bounds
            if i >= m or j >= n:
                return 0
            
            # If the cell is '0', no square can end here
            if matrix[i][j] == '0':
                return 0
            
            # Recursively compute the side length of the largest square at the bottom,
            # right, and bottom-right neighbors
            maxLenAtIdx = min(
                maxSquareAtIndex(i + 1, j),       # Square ending below
                maxSquareAtIndex(i, j + 1),       # Square ending to the right
                maxSquareAtIndex(i + 1, j + 1)    # Square ending diagonally
            ) + 1  # Add 1 for the current cell
            
            # Update the global maximum square length
            maxLen = max(maxLen, maxLenAtIdx)
            return maxLenAtIdx
        
        # Start the recursion for each cell, ensuring all possible squares are considered
        for i in range(m - 1, -1, -1):  # Loop over rows in reverse
            for j in range(n - 1, -1, -1):  # Loop over columns in reverse
                maxSquareAtIndex(i, j)
        
        # Return the area of the largest square
        return maxLen * maxLen
```

---

### Java Code:
```java
import java.util.Arrays;

class Solution {
    public int maximalSquare(char[][] matrix) {
        int m = matrix.length;    // Number of rows
        int n = matrix[0].length; // Number of columns
        int maxLen = 0;           // Maximum length of a square found
        
        // Create a DP table to store the side length of the largest square ending at (i, j)
        int[][] dp = new int[m + 1][n + 1];
        
        // Iterate through the matrix
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // If the cell contains '1', compute the largest square ending here
                if (matrix[i - 1][j - 1] == '1') {
                    dp[i][j] = Math.min(
                        Math.min(dp[i - 1][j], dp[i][j - 1]), // Top and left cells
                        dp[i - 1][j - 1]                     // Top-left diagonal cell
                    ) + 1;
                    
                    // Update the global maximum square length
                    maxLen = Math.max(maxLen, dp[i][j]);
                }
            }
        }
        
        // Return the area of the largest square
        return maxLen * maxLen;
    }
}
```

---

### **Explanation of the Java Code:**
1. **`dp` Array**:
    - The `dp[i][j]` represents the side length of the largest square whose bottom-right corner is at `(i-1, j-1)` in the matrix.
    - Use a `(m+1)x(n+1)` array to avoid edge cases for boundary conditions.

2. **Matrix Traversal**:
    - Traverse the matrix row by row and column by column. For each cell containing `'1'`, calculate the size of the square ending at that cell using the formula:
      \[
      dp[i][j] = \min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
      \]
    - Update the `maxLen` whenever a larger square is found.

3. **Return Area**:
    - The area of the largest square is the square of `maxLen`.

---

### **Key Differences Between Python and Java Approaches**:
1. **Python** uses recursion with memoization (`@cache`), while Java uses an iterative bottom-up DP approach with a 2D array.
2. In Python, memoization avoids recomputation, while in Java, dynamic programming ensures all subproblems are solved iteratively.
3. Both approaches achieve the same time complexity of \(O(m \times n)\).

The **space complexity** differs between the **Python recursive approach with memoization** and the **Java iterative approach with dynamic programming (DP)**:

---

### **Python Approach:**
- **Recursion Depth:** The recursion stack can go up to \(O(m + n)\) in the worst case (where \(m\) is the number of rows and \(n\) is the number of columns), as the recursion explores the matrix diagonally.
- **Memoization Cache:** The cache stores results for each unique cell \((i, j)\), requiring \(O(m \times n)\) space.

**Overall Space Complexity: \(O(m \times n)\) (for the cache) + \(O(m + n)\) (for the recursion stack) = \(O(m \times n)\)**.

---

### **Java Approach:**
- **DP Table:** The `dp` array requires \(O(m \times n)\) space to store the maximum square length for each cell.
- **No Recursion Stack:** The iterative nature avoids additional stack usage.

**Overall Space Complexity: \(O(m \times n)\).**

---

### **Optimization Possibility (Java)**:
In the Java approach, the `dp` array can be optimized to a **1D array of size \(n+1\)** because the calculation of `dp[i][j]` only depends on the current row and the previous row. This reduces the space complexity to:

**Optimized Java Space Complexity: \(O(n)\).**

---

### Comparison:
| Approach                     | Space Complexity |
|------------------------------|------------------|
| Python (Recursive + Cache)   | \(O(m \times n)\) |
| Java (Iterative with 2D DP)  | \(O(m \times n)\) |
| Java (Iterative with 1D DP)  | \(O(n)\)         |
