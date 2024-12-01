# Python cheat sheet for a Java Developer

---

### **Input/Output**
```python
# Input
n = int(input())  # Read an integer
nums = list(map(int, input().split()))  # Read a list of integers

# Output
print("Hello, World!")  # Print a string
print(nums)  # Print a list
```

**Java Equivalent:**
```java
import java.util.Scanner;

// Input
Scanner scanner = new Scanner(System.in);
int n = scanner.nextInt();  // Read an integer
List<Integer> nums = new ArrayList<>();
while (scanner.hasNextInt()) {
    nums.add(scanner.nextInt());  // Read a list of integers
}

// Output
System.out.println("Hello, World!");  // Print a string
System.out.println(nums);  // Print a list (you may want to print individual elements or use Arrays.toString())
```

---

### **Data Types**

| Python        | Java Equivalent |
|---------------|-----------------|
| `int`         | `int`           |
| `float`       | `double`        |
| `str`         | `String`        |
| `list`        | `ArrayList`     |
| `tuple`       | `ImmutableList` (from libraries like Guava) or use `Array` |
| `dict`        | `HashMap`       |
| `set`         | `HashSet`       |

---

### **Common List Operations**
```python
# Initialize a list
nums = [1, 2, 3]

# Add elements
nums.append(4)  # Add 4 at the end
nums.extend([5, 6])  # Add multiple elements
nums.insert(1, 99)  # Add 99 at index 1

# Remove elements
nums.pop()  # Remove last element
nums.pop(1)  # Remove element at index 1
nums.remove(3)  # Remove first occurrence of 3

# Access elements
nums[0]  # First element
nums[-1]  # Last element
nums[1:3]  # Slice (index 1 to 2)

# Useful methods
nums.sort()  # Sort in ascending order
nums.reverse()  # Reverse the list
nums.index(99)  # Find index of 99
```

**Java Equivalent:**
```java
import java.util.ArrayList;
import java.util.Collections;

// Initialize a list
List<Integer> nums = new ArrayList<>();
nums.add(1);
nums.add(2);
nums.add(3);

// Add elements
nums.add(4);  // Add 4 at the end
Collections.addAll(nums, 5, 6);  // Add multiple elements
nums.add(1, 99);  // Add 99 at index 1

// Remove elements
nums.remove(nums.size() - 1);  // Remove last element
nums.remove(1);  // Remove element at index 1
nums.remove(Integer.valueOf(3));  // Remove first occurrence of 3

// Access elements
int first = nums.get(0);  // First element
int last = nums.get(nums.size() - 1);  // Last element
List<Integer> slice = nums.subList(1, 3);  // Slice (index 1 to 2)

// Useful methods
Collections.sort(nums);  // Sort in ascending order
Collections.reverse(nums);  // Reverse the list
int index = nums.indexOf(99);  // Find index of 99
```

---

### **Loops**

```python
# For loop
for i in range(5):  # Equivalent to for (int i = 0; i < 5; i++)
    print(i)

# While loop
i = 0
while i < 5:
    print(i)
    i += 1
```

**Java Equivalent:**
```java
// For loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// While loop
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
```

---

### **Conditionals**
```python
if x > 0:
    print("Positive")
elif x < 0:
    print("Negative")
else:
    print("Zero")
```

**Java Equivalent:**
```java
if (x > 0) {
    System.out.println("Positive");
} else if (x < 0) {
    System.out.println("Negative");
} else {
    System.out.println("Zero");
}
```

---

### **Functions**
```python
# Function definition
def add(a, b):
    return a + b

# Function call
result = add(2, 3)
```

**Java Equivalent:**
```java
// Function definition
public int add(int a, int b) {
    return a + b;
}

// Function call
int result = add(2, 3);
```

---

### **Lambda Functions**
```python
# Anonymous function
square = lambda x: x * x
print(square(5))  # Output: 25

# Sort with custom key
nums = [(1, 2), (3, 1), (5, 0)]
nums.sort(key=lambda x: x[1])  # Sort by second element
```

**Java Equivalent:**
```java
// Anonymous function (Lambda expression)
Function<Integer, Integer> square = x -> x * x;
System.out.println(square.apply(5));  // Output: 25

// Sort with custom comparator
List<int[]> nums = Arrays.asList(new int[]{1, 2}, new int[]{3, 1}, new int[]{5, 0});
nums.sort((a, b) -> Integer.compare(a[1], b[1]));  // Sort by second element
```

---

### **Dictionary (HashMap Equivalent)**
```python
# Initialize a dictionary
d = {'a': 1, 'b': 2}

# Add/Update
d['c'] = 3  # Add key 'c' with value 3

# Access
print(d['a'])  # Access value of key 'a'

# Check existence
if 'b' in d:
    print("Key exists")

# Iterate
for key, value in d.items():
    print(key, value)
```

**Java Equivalent:**
```java
import java.util.HashMap;
import java.util.Map;

// Initialize a HashMap
Map<String, Integer> d = new HashMap<>();
d.put("a", 1);
d.put("b", 2);

// Add/Update
d.put("c", 3);  // Add key 'c' with value 3

// Access
System.out.println(d.get("a"));  // Access value of key 'a'

// Check existence
if (d.containsKey("b")) {
    System.out.println("Key exists");
}

// Iterate
for (Map.Entry<String, Integer> entry : d.entrySet()) {
    System.out.println(entry.getKey() + " " + entry.getValue());
}
```

---

### **Set (HashSet Equivalent)**
```python
# Initialize a set
s = {1, 2, 3}

# Add
s.add(4)

# Remove
s.remove(2)  # Throws an error if not found
s.discard(5)  # No error if not found

# Common operations
union = s | {5, 6}  # Union
intersection = s & {2, 3, 4}  # Intersection
difference = s - {2, 4}  # Difference
```

**Java Equivalent:**
```java
import java.util.HashSet;
import java.util.Set;

// Initialize a HashSet
Set<Integer> s = new HashSet<>();
s.add(1);
s.add(2);
s.add(3);

// Add
s.add(4);

// Remove
s.remove(2);  // Throws an error if not found
s.remove(5);  // No error if not found

// Common operations
Set<Integer> union = new HashSet<>(s);
union.addAll(Set.of(5, 6));  // Union
Set<Integer> intersection = new HashSet<>(s);
intersection.retainAll(Set.of(2, 3, 4));  // Intersection
Set<Integer> difference = new HashSet<>(s);
difference.removeAll(Set.of(2, 4));  // Difference
```

---

### **String Manipulation**
```python
# Initialize
s = "leetcode"

# Access
print(s[0])  # First character
print(s[-1])  # Last character

# Slicing
print(s[1:4])  # Substring (index 1 to 3)

# Split and Join
words = s.split('e')  # Split on 'e'
print('-'.join(words))  # Join with '-'

# Common methods
print(s.upper())  # Convert to uppercase
print(s.lower())  # Convert to lowercase
print(s.replace('e', 'a'))  # Replace all 'e' with 'a'
```

**Java Equivalent:**
```java
// Initialize
String s = "leetcode";

// Access
System.out.println(s.charAt(0));  // First character
System.out.println(s.charAt(s.length() - 1));  // Last character

// Slicing (use substring method)
System.out.println(s.substring(1, 4));  // Substring (index 1 to 3)

// Split and Join
String[] words = s.split("e");  // Split on 'e'


System.out.println(String.join("-", words));  // Join with '-'

// Common methods
System.out.println(s.toUpperCase());  // Convert to uppercase
System.out.println(s.toLowerCase());  // Convert to lowercase
System.out.println(s.replace('e', 'a'));  // Replace all 'e' with 'a'
```

---

### **2D Array (Matrix)**
```python
# Initialize
matrix = [[0] * 3 for _ in range(3)]  # 3x3 matrix of zeros

# Access
print(matrix[0][1])  # Access row 0, column 1

# Iterate
for row in matrix:
    for val in row:
        print(val)
```

**Java Equivalent:**
```java
// Initialize
int[][] matrix = new int[3][3];  // 3x3 matrix of zeros

// Access
System.out.println(matrix[0][1]);  // Access row 0, column 1

// Iterate
for (int[] row : matrix) {
    for (int val : row) {
        System.out.println(val);
    }
}
```

---

### **Comparison with Java**
| Java Code                           | Python Equivalent                    |
|-------------------------------------|---------------------------------------|
| `for (int i = 0; i < n; i++)`       | `for i in range(n)`                  |
| `if (x > 0)`                        | `if x > 0:`                          |
| `int[] arr = new int[n]`            | `arr = [0] * n`                      |
| `ArrayList<Integer> list = new...`  | `list = []`                          |
| `HashMap<String, Integer>`          | `dict = {}`                          |

---
