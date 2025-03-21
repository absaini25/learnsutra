# Next Smaller/Larger Element

Computing the **Next Smaller Element (NSE)** and **Next Larger Element (NLE)** involves determining for each element in an array the first smaller or larger element to its right. These problems are commonly solved using a **monotonic stack** for efficiency, ensuring \(O(n)\) time complexity.

---

### **Next Smaller Element (NSE)**
#### Goal:
For each element in the array, find the first element to the right that is smaller.

#### Algorithm (Monotonic Stack Approach):
1. **Initialize a stack**:
    - The stack will store indices of elements in the array.
    - It will maintain a **monotonic increasing order** of element values (from top to bottom).

2. **Iterate through the array from right to left**:
    - For each element:
        1. While the stack is not empty and the element at the top of the stack is **greater than or equal to** the current element, **pop** the stack.
            - This ensures that the stack only contains indices of elements that could be the "next smaller" for future elements.
        2. If the stack is not empty after the above step, the **top of the stack** points to the **next smaller element** for the current element.
        3. Push the current element's index onto the stack.

3. **Result**:
    - For every element, if no smaller element exists, the result will be \(-1\).

---

#### Example (NSE):
Input: \([4, 2, 1, 5, 3]\)

| Index | Element | Stack (Top to Bottom) | NSE |
|-------|---------|------------------------|-----|
| 4     | 3       | [4]                   | -1  |
| 3     | 5       | [4, 3]                | 3   |
| 2     | 1       | [2]                   | -1  |
| 1     | 2       | [2, 1]                | 1   |
| 0     | 4       | [2, 1, 0]             | 2   |

Result: \([2, 1, -1, 3, -1]\)

---

### **Next Larger Element (NLE)**
#### Goal:
For each element in the array, find the first element to the right that is larger.

#### Algorithm (Monotonic Stack Approach):
1. **Initialize a stack**:
    - The stack will store indices of elements in the array.
    - It will maintain a **monotonic decreasing order** of element values (from top to bottom).

2. **Iterate through the array from right to left**:
    - For each element:
        1. While the stack is not empty and the element at the top of the stack is **less than or equal to** the current element, **pop** the stack.
            - This ensures that the stack only contains indices of elements that could be the "next larger" for future elements.
        2. If the stack is not empty after the above step, the **top of the stack** points to the **next larger element** for the current element.
        3. Push the current element's index onto the stack.

3. **Result**:
    - For every element, if no larger element exists, the result will be \(-1\).

---

#### Example (NLE):
Input: \([4, 2, 1, 5, 3]\)

| Index | Element | Stack (Top to Bottom) | NLE |
|-------|---------|------------------------|-----|
| 4     | 3       | [4]                   | -1  |
| 3     | 5       | [3]                   | -1  |
| 2     | 1       | [3, 2]                | 5   |
| 1     | 2       | [3, 1]                | 5   |
| 0     | 4       | [3, 0]                | 5   |

Result: \([5, 5, 5, -1, -1]\)

---

### **Key Observations**
1. **Stack Property**:
    - For NSE, the stack ensures the elements in it are smaller than the current element (monotonic increasing stack).
    - For NLE, the stack ensures the elements in it are larger than the current element (monotonic decreasing stack).

2. **Efficiency**:
    - Each element is pushed onto and popped from the stack at most once, ensuring \(O(n)\) time complexity.

3. **Edge Cases**:
    - If the array is sorted in increasing order, all elements will have \(-1\) as their NSE.
    - If the array is sorted in decreasing order, all elements will have \(-1\) as their NLE.

---

### **Code Implementation**

#### Next Smaller Element (NSE)
```python
def nextSmallerElements(arr):
    n = len(arr)
    nse = [-1] * n
    stack = []
    
    for i in range(n - 1, -1, -1):  # Traverse from right to left
        while stack and arr[stack[-1]] >= arr[i]:
            stack.pop()
        if stack:
            nse[i] = arr[stack[-1]]
        stack.append(i)
    
    return nse
```

#### Next Larger Element (NLE)
```python
def nextLargerElements(arr):
    n = len(arr)
    nle = [-1] * n
    stack = []
    
    for i in range(n - 1, -1, -1):  # Traverse from right to left
        while stack and arr[stack[-1]] <= arr[i]:
            stack.pop()
        if stack:
            nle[i] = arr[stack[-1]]
        stack.append(i)
    
    return nle
```

---

### **Applications**
1. **Histogram Problems**: Computing NSE is crucial for solving the largest rectangle in a histogram.
2. **Stock Span/Price Problems**: NLE is used to determine the next higher price in stock span problems.
3. **Sliding Window Problems**: NLE and NSE help identify max/min in subarrays efficiently.