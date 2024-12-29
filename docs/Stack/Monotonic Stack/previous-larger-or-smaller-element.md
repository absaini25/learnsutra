# Previous larger/smaller element

The **Previous Smaller Element (PSE)** and **Previous Larger Element (PLE)** problems are similar to **Next Smaller Element (NSE)** and **Next Larger Element (NLE)**, but instead of looking for the first element to the **right**, we look for the first element to the **left** of each index.

These are also efficiently solved using a **monotonic stack**, but this time the array is traversed **from left to right**.

---

### **Previous Smaller Element (PSE)**
#### Goal:
For each element in the array, find the first smaller element to its left.

#### Algorithm (Monotonic Stack Approach):
1. **Initialize a stack**:
    - The stack will store indices of elements in the array.
    - It will maintain a **monotonic increasing order** of element values (from top to bottom).

2. **Iterate through the array from left to right**:
    - For each element:
        1. While the stack is not empty and the element at the top of the stack is **greater than or equal to** the current element, **pop** the stack.
        2. If the stack is not empty after the above step, the **top of the stack** points to the **previous smaller element** for the current element.
        3. Push the current element's index onto the stack.

3. **Result**:
    - For every element, if no smaller element exists, the result will be \(-1\).

---

#### Example (PSE):
Input: \([4, 2, 1, 5, 3]\)

| Index | Element | Stack (Top to Bottom) | PSE |
|-------|---------|------------------------|-----|
| 0     | 4       | [0]                   | -1  |
| 1     | 2       | [1]                   | -1  |
| 2     | 1       | [2]                   | -1  |
| 3     | 5       | [2, 3]                | 1   |
| 4     | 3       | [2, 4]                | 1   |

Result: \([-1, -1, -1, 1, 1]\)

---

### **Previous Larger Element (PLE)**
#### Goal:
For each element in the array, find the first larger element to its left.

#### Algorithm (Monotonic Stack Approach):
1. **Initialize a stack**:
    - The stack will store indices of elements in the array.
    - It will maintain a **monotonic decreasing order** of element values (from top to bottom).

2. **Iterate through the array from left to right**:
    - For each element:
        1. While the stack is not empty and the element at the top of the stack is **less than or equal to** the current element, **pop** the stack.
        2. If the stack is not empty after the above step, the **top of the stack** points to the **previous larger element** for the current element.
        3. Push the current element's index onto the stack.

3. **Result**:
    - For every element, if no larger element exists, the result will be \(-1\).

---

#### Example (PLE):
Input: \([4, 2, 1, 5, 3]\)

| Index | Element | Stack (Top to Bottom) | PLE |
|-------|---------|------------------------|-----|
| 0     | 4       | [0]                   | -1  |
| 1     | 2       | [0, 1]                | 4   |
| 2     | 1       | [0, 1, 2]             | 2   |
| 3     | 5       | [3]                   | 4   |
| 4     | 3       | [3, 4]                | 5   |

Result: \([-1, 4, 2, -1, 5]\)

---

### **Key Observations**
1. **Stack Property**:
    - For PSE, the stack ensures the elements in it are smaller than the current element (monotonic increasing stack).
    - For PLE, the stack ensures the elements in it are larger than the current element (monotonic decreasing stack).

2. **Efficiency**:
    - Each element is pushed onto and popped from the stack at most once, ensuring \(O(n)\) time complexity.

3. **Edge Cases**:
    - If the array is sorted in increasing order, all elements will have \(-1\) as their PSE.
    - If the array is sorted in decreasing order, all elements will have \(-1\) as their PLE.

---

### **Code Implementation**

#### Previous Smaller Element (PSE)
```python
def previousSmallerElements(arr):
    n = len(arr)
    pse = [-1] * n
    stack = []
    
    for i in range(n):  # Traverse from left to right
        while stack and arr[stack[-1]] >= arr[i]:
            stack.pop()
        if stack:
            pse[i] = arr[stack[-1]]
        stack.append(i)
    
    return pse
```

#### Previous Larger Element (PLE)
```python
def previousLargerElements(arr):
    n = len(arr)
    ple = [-1] * n
    stack = []
    
    for i in range(n):  # Traverse from left to right
        while stack and arr[stack[-1]] <= arr[i]:
            stack.pop()
        if stack:
            ple[i] = arr[stack[-1]]
        stack.append(i)
    
    return ple
```

---

### **Applications**
1. **Histogram Problems**: PSE and NSE are used to compute the width of rectangles in the largest rectangle in a histogram problem.
2. **Stock Span Problems**: PLE helps determine the previous higher price for stock analysis.
3. **Sliding Window Problems**: PSE and NSE provide critical insights for subarray calculations.