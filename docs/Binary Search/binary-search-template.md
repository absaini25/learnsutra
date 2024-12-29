Binary search is a powerful tool for efficiently solving problems that involve a **monotonic function**. To use binary
search effectively, you must decide how to adjust the search range based on the problem's requirements — whether you're
looking for the **first feasible candidate** or the **last feasible candidate**. This post provides a detailed template
and discusses how to adapt it for different scenarios.

---

### **The Core Idea**

Binary search works on problems where the data or condition exhibits a monotonic behavior. That is, as you move along
the search range:

- A condition either transitions from `False` to `True` (**non-decreasing**) or from `True` to `False` (**non-increasing**).

In binary search, the goal is to narrow the search range until the target element or condition is located. To achieve
this, the update logic depends on whether we are moving **left** or **right** for the next feasible candidate.

---

### **Binary Search Template**

The template is structured to handle both cases — finding the **first feasible candidate** and the **last feasible
candidate**.

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    result = -1  # Default if no solution is found

    while left <= right:
        mid = (left + right) // 2

        if feasible(mid):  # Feasible condition depends on the problem
            result = mid  # Update the result
            # Adjust search range depending on the problem
            right = mid - 1  # Move left for the first feasible candidate
            # left = mid + 1  # Uncomment to move right for the last feasible candidate
            # As a general rule, we need to figure out in which half our next feasible candidate would be found
            # and accordingly shrink the range.
        else:
            # Adjust search range to exclude the non-feasible mid
            left = mid + 1  # Move right if condition is not met
            # right = mid - 1  # Uncomment to move left if needed

    return result
```

---

### **Adapting the Template**

1. **Finding the First Feasible Candidate**:
    - If the feasible condition is satisfied at `mid`, the result is updated to `mid`.
    - Narrow the search to the **left half** (`right = mid - 1`) to find earlier occurrences.

2. **Finding the Last Feasible Candidate**:
    - If the feasible condition is satisfied at `mid`, the result is updated to `mid`.
    - Narrow the search to the **right half** (`left = mid + 1`) to find later occurrences.

---

### **Example 1: Find the First `True`**

Given a boolean array `[False, False, True, True, True]`, find the **index of the first `True`**.

#### Feasible Function:

```python
def feasible(mid):
    return arr[mid] == True
```

#### Solution:

```python
def find_first_true(arr):
    left, right = 0, len(arr) - 1
    result = -1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid]:  # Feasible condition: arr[mid] == True
            result = mid
            right = mid - 1  # Move left for the first feasible candidate
        else:
            left = mid + 1  # Move right if not feasible

    return result
```

#### Output:

```python
arr = [False, False, True, True, True]
print(find_first_true(arr))  # Output: 2
```

---

### **Example 2: Find the Last `False`**

Given the same boolean array, find the **index of the last `False`**.

#### Feasible Function:

```python
def feasible(mid):
    return arr[mid] == False
```

#### Solution:

```python
def find_last_false(arr):
    left, right = 0, len(arr) - 1
    result = -1

    while left <= right:
        mid = (left + right) // 2
        if not arr[mid]:  # Feasible condition: arr[mid] == False
            result = mid
            left = mid + 1  # Move right for the last feasible candidate
        else:
            right = mid - 1  # Move left if not feasible

    return result
```

#### Output:

```python
arr = [False, False, True, True, True]
print(find_last_false(arr))  # Output: 1
```

---

### **Key Insights**

1. **Adjusting the Search Range**:
    - The direction you adjust the range (`left` or `right`) depends on whether you're looking for the **first** or *
      *last** occurrence.
    - Always test your range adjustments to ensure correctness.

2. **Feasible Function**:
    - The feasible function encapsulates the problem's constraints and determines whether the current index satisfies
      the condition.

3. **Boundary Conditions**:
    - Handle edge cases, such as when the array contains no feasible candidates (e.g., all `False` or all `True`).

---

### **Real-World Applications**

Binary search with monotonic functions is widely applicable:

- **Find the smallest/largest element that satisfies a condition** (e.g., minimum capacity to transport goods within a
  deadline).
- **Allocate resources** (e.g., minimum number of servers required to handle traffic).
- **Search for a boundary in sorted data** (e.g., pivot points in rotated arrays).

---

### **Conclusion**

Binary search is more than just a tool for sorted arrays. Its power lies in efficiently narrowing down a search range
based on a monotonic feasibility function. By understanding how to adapt the search range for different problems, you
can apply binary search to a wide variety of scenarios.

Let the problem guide you: **Are you looking for the first feasible candidate or the last feasible candidate?** Once you
answer this, the binary search template will do the rest!