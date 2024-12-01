# Maximum Score from Performing Multiplication Operations

You are given two 0-indexed integer arrays `nums` and `multipliers` of size `n` and `m` respectively, where `n >= m`.

You begin with a score of `0`. You want to perform exactly `m` operations. On the `ith` operation (0-indexed) you will:

-   Choose one integer `x` from either the start or the end of the array `nums`.
-   Add `multipliers[i] * x` to your score.
    -   Note that`multipliers[0]`corresponds to the first operation, `multipliers[1]` to the second operation, and so on.
-   Remove `x`from`nums`.

Return *the maximum score after performing *`m` *operations.*

Example 1:

Input: nums = [1,2,3], multipliers = [3,2,1]
Output: 14
Explanation: An optimal solution is as follows:
- Choose from the end, [1,2,3], adding 3 * 3 = 9 to the score.
- Choose from the end, [1,2], adding 2 * 2 = 4 to the score.
- Choose from the end, [1], adding 1 * 1 = 1 to the score.
  The total score is 9 + 4 + 1 = 14.

Example 2:

Input: nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3,4,6]
Output: 102
Explanation: An optimal solution is as follows:
- Choose from the start, [-5,-3,-3,-2,7,1], adding -5 * -10 = 50 to the score.
- Choose from the start, [-3,-3,-2,7,1], adding -3 * -5 = 15 to the score.
- Choose from the start, [-3,-2,7,1], adding -3 * 3 = -9 to the score.
- Choose from the end, [-2,7,1], adding 1 * 4 = 4 to the score.
- Choose from the end, [-2,7], adding 7 * 6 = 42 to the score.
  The total score is 50 + 15 - 9 + 4 + 42 = 102.

Constraints:

-   `n == nums.length`
-   `m == multipliers.length`
-   `1 <= m <= 300`
-   `m <= n <= 105`
-   `-1000 <= nums[i], multipliers[i] <= 1000`

```java
class Solution {

    public int maximumScore(int[] nums, int[] multipliers) {
        int m = multipliers.length;
        // Cache with default values of 0, marking uncalculated results
        int[][] cache = new int[m][m]; 
        return calculateMaxScore(nums, multipliers, m, 0, cache);
    }

    private int calculateMaxScore(int[] nums, int[] multipliers, int remainingOps, int leftIdx, int[][] cache) {
        // Base case: No operations left
        if (remainingOps == 0) {
            return 0;
        }

        // Use cached result if already calculated
        if (cache[remainingOps - 1][leftIdx] != 0) {
            return cache[remainingOps - 1][leftIdx];
        }

        // Calculate indices and current multiplier
        int rightIdx = nums.length - (multipliers.length - remainingOps) + leftIdx - 1;
        int multiplier = multipliers[multipliers.length - remainingOps];

        // Compute the maximum score
        int scoreFromLeft = multiplier * nums[leftIdx] + calculateMaxScore(nums, multipliers, remainingOps - 1, leftIdx + 1, cache);
        int scoreFromRight = multiplier * nums[rightIdx] + calculateMaxScore(nums, multipliers, remainingOps - 1, leftIdx, cache);

        // Cache the result
        cache[remainingOps - 1][leftIdx] = Math.max(scoreFromLeft, scoreFromRight);
        return cache[remainingOps - 1][leftIdx];
    }
}

```

```python
class Solution:
    def maximumScore(self, nums: list[int], multipliers: list[int]) -> int:
        m = len(multipliers)
        n = len(nums)
        # Initialize cache with None to mark uncalculated results
        cache = [[None] * m for _ in range(m)]

        def calculate_max_score(remaining_ops: int, left_idx: int) -> int:
            # Base case: No operations left
            if remaining_ops == 0:
                return 0

            # Use cached result if available
            if cache[remaining_ops - 1][left_idx] is not None:
                return cache[remaining_ops - 1][left_idx]

            # Calculate indices and current multiplier
            right_idx = n - (m - remaining_ops) + left_idx - 1
            multiplier = multipliers[m - remaining_ops]

            # Recursively compute the maximum score
            score_from_left = multiplier * nums[left_idx] + calculate_max_score(remaining_ops - 1, left_idx + 1)
            score_from_right = multiplier * nums[right_idx] + calculate_max_score(remaining_ops - 1, left_idx)

            # Cache and return the result
            cache[remaining_ops - 1][left_idx] = max(score_from_left, score_from_right)
            return cache[remaining_ops - 1][left_idx]

        return calculate_max_score(m, 0)

```