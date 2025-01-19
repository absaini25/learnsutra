# Python knowledge for DSA

## General

### Defining classes and methods

---

#### **Defining a Class**

A class is defined using the `class` keyword:

```python
class MyClass:
    # Class Attribute (shared by all instances)
    class_attribute = "Shared value"

    # Constructor (Initializer)
    def __init__(self, attribute1, attribute2="default"):
        self.attribute1 = attribute1  # Instance attribute
        self.attribute2 = attribute2  # Instance attribute

    # Instance Method
    def instance_method(self):
        return f"Attribute1 is {self.attribute1}"

    # Class Method
    @classmethod
    def class_method(cls):
        return f"Class Attribute is {cls.class_attribute}"

    # Static Method
    @staticmethod
    def static_method():
        return "Static methods are not tied to class or instance."
```

---

#### **Constructor: `__init__`**

The `__init__` method is called automatically when a new object is created. It initializes instance attributes.

##### **Avoid Mutable Default Arguments**

Default arguments in constructors should **not** be mutable (e.g., lists, dictionaries). This is because mutable objects
are shared across instances, which can lead to unexpected behavior.

Example of incorrect usage:

```python
class Example:
    def __init__(self, data=[]):  # Avoid mutable default arguments
        self.data = data
```

Correct usage:

```python
class Example:
    def __init__(self, data=None):
        self.data = data if data is not None else []
```

---

#### **Defining Methods**

1. **Instance Methods**  
   Operate on an instance of the class. Access instance attributes using `self`.

   Example:
   ```python
   def greet(self, name):
       return f"Hello, {name}! This is {self.attribute1}"
   ```

2. **Class Methods**  
   Operate on the class itself, not specific instances. Use `@classmethod` decorator and `cls` as the first parameter.

   Example:
   ```python
   @classmethod
   def change_class_attribute(cls, value):
       cls.class_attribute = value
   ```

3. **Static Methods**  
   Do not access class or instance data. Use `@staticmethod`.

   Example:
   ```python
   @staticmethod
   def utility_function():
       return "This is a utility function."
   ```

---

#### **Nested Classes and Methods**

Nested classes and methods help organize code, particularly when certain logic is only relevant within a specific
context.

##### **Nested Classes**

```python
class OuterClass:
    class InnerClass:
        def inner_method(self):
            return "Inner method in InnerClass"
```

##### **Nested Methods**

Methods can call helper functions defined within them:

```python
class MyClass:
    def complex_method(self):
        def helper_function(value):
            return value * 2

        result = helper_function(10)
        return f"Result is {result}"
```

---

#### **Instantiating and Using a Class**

```python
# Creating an instance
obj = MyClass("Value1", attribute2="Value2")

# Accessing attributes and methods
print(obj.instance_method())  # "Attribute1 is Value1"
print(MyClass.class_method())  # "Class Attribute is Shared value"
print(MyClass.static_method())  # "Static methods are not tied to class or instance."
```

---

#### **Key Takeaways**

1. Define classes using `class` keyword.
2. Use `__init__` to initialize instance attributes.
3. Avoid mutable default arguments in constructors.
4. Use instance, class, and static methods appropriately.
5. Nest classes or methods for encapsulating related logic.

---

## Conditions

### **Basic Conditional Statements**
- **`if`**: Executes a block of code if the condition is `True`.
- **`elif`**: Adds more conditions to an `if` statement.
- **`else`**: Executes when no preceding conditions are `True`.

```python
x = 10
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is exactly 5")
else:
    print("x is less than 5")
```

---

### **Comparison Operators**
Used to compare values:
- `==` : Equal to
- `!=` : Not equal to
- `<`, `>`, `<=`, `>=` : Less than, greater than, etc.

---

### **Logical Operators**
Combine conditions:
- **`and`**: Both conditions must be `True`.
- **`or`**: At least one condition must be `True`.
- **`not`**: Negates a condition.

```python
x = 7
if x > 5 and x < 10:
    print("x is between 5 and 10")
```

---

### **Membership Operators**
Check for membership:
- `in`: Checks if a value exists in a sequence.
- `not in`: Checks if a value does not exist in a sequence.

```python
fruits = ["apple", "banana", "cherry"]
if "apple" in fruits:
    print("Apple is in the list!")
```

---

### **Ternary Conditions**
A concise way to write `if-else` in a single line:
```python
x = 10
result = "Positive" if x > 0 else "Non-positive"
print(result)
```

---

## List

### Array Slicing

Array slicing is a powerful way to access subsets of elements in sequences like lists, strings, and tuples. Here's how it works:

---

### **Syntax**
```python
sequence[start:stop:step]
```
- **`start`**: Index to begin slicing (inclusive). Defaults to `0`.
- **`stop`**: Index to end slicing (exclusive). Defaults to the sequence's length.
- **`step`**: Interval between elements. Defaults to `1`.

---

### **Examples**
```python
arr = [0, 1, 2, 3, 4, 5]

# Basic Slicing
print(arr[1:4])      # Output: [1, 2, 3]

# Skipping Elements
print(arr[::2])      # Output: [0, 2, 4]

# Reverse Slicing
print(arr[::-1])     # Output: [5, 4, 3, 2, 1, 0]

# Omitting Start/Stop
print(arr[:3])       # Output: [0, 1, 2]
print(arr[3:])       # Output: [3, 4, 5]

# Negative Indices
print(arr[-3:])      # Output: [3, 4, 5]

# Out-of-Range Indices
print(arr[1:10])     # Output: [1, 2, 3, 4, 5]
```

---

### **Tips**:
1. Slicing creates a **shallow copy**, not a reference.
2. Use `step` for custom intervals or reversed slices.
3. Out-of-range indices are handled gracefully.

### Using as a stack

In Python, lists can be efficiently used as a stack (LIFO: Last In, First Out) with the following operations:

---

### **Operations**:
1. **Push**: Add an element to the stack using `append()`.
2. **Pop**: Remove and return the top element using `pop()`.
3. **Peek**: Access the top element without removing it using indexing.

---

### **Example**:
```python
stack = []

# Push elements onto the stack
stack.append(10)  # Stack: [10]
stack.append(20)  # Stack: [10, 20]
stack.append(30)  # Stack: [10, 20, 30]

# Pop the top element
top = stack.pop()  # Returns 30, Stack: [10, 20]

# Peek the top element
print(stack[-1])    # Output: 20 (top of the stack)

# Check if stack is empty
print(len(stack) == 0)  # Output: False
```

---

### **Notes**:
- **Push**: `O(1)`
- **Pop**: `O(1)`
- **Peek**: `O(1)`

### Zipping lists

We can zip multiple lists to create a common iterable.

#### Example 1: Basic Usage of `zip()` with Equal Lists

```python
# Two lists of equal length
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']

# Zipping the lists together
zipped = list(zip(list1, list2))

print(zipped)  # Output: [(1, 'a'), (2, 'b'), (3, 'c')]
```

#### Example 2: `zip()` with Unequal Length Lists

```python
# Two lists of unequal length
list1 = [1, 2, 3]
list2 = ['a', 'b']

# Zipping the lists together
zipped = list(zip(list1, list2))

print(zipped)  # Output: [(1, 'a'), (2, 'b')]
```

#### Note

- **Equal Length**: When the lists have equal lengths, `zip()` pairs the corresponding elements from each list.
- **Unequal Length**: When the lists have unequal lengths, `zip()` stops when the shortest list is exhausted. It does
  not raise an error or fill in missing values (like `None`), but simply stops at the end of the shortest list.
- **Important!**:`zip` does not create another list. So, we cannot use things like `zip(list1, list2)[i]` or
  `len(zip(list1, list2))` on it's output. Thus, the above examples are creating a new list out of zip's output.


## List comprehension

List comprehension is a concise way to create lists in Python. It's a powerful tool for filtering, transforming, or constructing new lists from existing ones.

---

### **Syntax of List Comprehension**:
```python
[expression for item in iterable if condition]
```
- **`expression`**: The value to add to the new list.
- **`item`**: The variable representing each element in the iterable.
- **`iterable`**: A sequence (like a list, range, etc.).
- **`condition`**: An optional filter to include only items that satisfy the condition.

---

### **Basic Example**:
```python
# Create a list of squares
squares = [x**2 for x in range(5)]  
print(squares)  # Output: [0, 1, 4, 9, 16]
```

---

### **Using List Comprehension for Filtering**:
You can filter elements by adding a condition to the comprehension.

```python
# Get even numbers from a list
numbers = [1, 2, 3, 4, 5, 6]
evens = [x for x in numbers if x % 2 == 0]
print(evens)  # Output: [2, 4, 6]
```

---

### **Using List Comprehension for Mapping (Transforming)**:
You can apply a transformation to each item in a list.

```python
# Square each number in the list
numbers = [1, 2, 3, 4]
squared = [x**2 for x in numbers]
print(squared)  # Output: [1, 4, 9, 16]
```

---

### **Combining Filtering and Mapping**:
You can filter and transform in one step.

```python
# Get the squares of even numbers only
numbers = [1, 2, 3, 4, 5, 6]
even_squares = [x**2 for x in numbers if x % 2 == 0]
print(even_squares)  # Output: [4, 16, 36]
```

---

### **Nested List Comprehensions**:
List comprehensions can also be nested to process multi-dimensional data.

```python
# Flatten a 2D list
matrix = [[1, 2], [3, 4], [5, 6]]
flattened = [item for sublist in matrix for item in sublist]
print(flattened)  # Output: [1, 2, 3, 4, 5, 6]
```

---

## Tuples

Tuples are one of the core data structures in Python, offering an immutable and ordered collection of elements.

---

### **What is a Tuple?**
A tuple is a sequence of values that can be of any type, but once created, it cannot be modified (immutable). It is defined using parentheses `()`.

```python
my_tuple = (1, 2, 3)
```

---

### **Key Properties**:
1. **Immutable**: Once created, you cannot add, remove, or change elements in a tuple.
   ```python
   # my_tuple[0] = 10  # This would raise an error
   ```

2. **Ordered**: The order of elements is preserved.
   ```python
   my_tuple = (10, 20, 30)
   print(my_tuple[1])  # Output: 20
   ```

3. **Supports Multiple Data Types**:
   Tuples can store elements of different data types.
   ```python
   mixed_tuple = (1, "hello", 3.14)
   ```

4. **Can Contain Nested Tuples**:
   You can have tuples inside other tuples.
   ```python
   nested_tuple = ((1, 2), (3, 4))
   ```

---

### **Common Tuple Operations**:
- **Accessing Elements**: Use indexing to retrieve values.
  ```python
  my_tuple = (1, 2, 3)
  print(my_tuple[0])  # Output: 1
  ```

- **Concatenation**: Combine tuples.
  ```python
  tuple1 = (1, 2)
  tuple2 = (3, 4)
  print(tuple1 + tuple2)  # Output: (1, 2, 3, 4)
  ```

- **Repetition**: Repeat elements in a tuple.
  ```python
  tuple3 = (1, 2)
  print(tuple3 * 3)  # Output: (1, 2, 1, 2, 1, 2)
  ```

---

### **When to Use Tuples**:
- **Immutability**: When you need a collection of data that should not change.
- **Performance**: Tuples are slightly faster than lists due to their immutability.
- **Hashable**: Tuples can be used as keys in dictionaries, unlike lists.

---

## String

| **Method**               | **Description**                                                           | **Example**                    | **Output**              |
|--------------------------|---------------------------------------------------------------------------|--------------------------------|-------------------------|
| `str.lower()`            | Converts all characters to lowercase.                                     | `"Hello".lower()`              | `'hello'`               |
| `str.upper()`            | Converts all characters to uppercase.                                     | `"Hello".upper()`              | `'HELLO'`               |
| `str.strip([chars])`     | Removes leading and trailing characters (default: whitespace).            | `"  hello  ".strip()`          | `'hello'`               |
| `str.find(sub)`          | Returns the index of the first occurrence of `sub`, or `-1` if not found. | `"hello".find("e")`            | `1`                     |
| `str.index(sub)`         | Like `find()`, but raises `ValueError` if `sub` is not found.             | `"hello".index("e")`           | `1`                     |
| `str.count(sub)`         | Counts the occurrences of `sub` in the string.                            | `"hello".count("l")`           | `2`                     |
| `str.replace(old, new)`  | Replaces all occurrences of `old` with `new`.                             | `"hello".replace("l", "p")`    | `'heppo'`               |
| `str.split([sep])`       | Splits the string into a list using `sep` (default: whitespace).          | `"a,b,c".split(",")`           | `['a', 'b', 'c']`       |
| `str.join(iterable)`     | Joins elements of an iterable with the string as a separator.             | `" ".join(["hello", "world"])` | `'hello world'`         |
| `str.startswith(prefix)` | Returns `True` if the string starts with the specified prefix.            | `"hello".startswith("he")`     | `True`                  |
| `str.endswith(suffix)`   | Returns `True` if the string ends with the specified suffix.              | `"hello".endswith("lo")`       | `True`                  |
| `str.isdigit()`          | Returns `True` if all characters are digits.                              | `"123".isdigit()`              | `True`                  |
| `str.isalpha()`          | Returns `True` if all characters are alphabetic.                          | `"abc".isalpha()`              | `True`                  |
| `str.isalnum()`          | Returns `True` if all characters are alphanumeric.                        | `"abc123".isalnum()`           | `True`                  |
| `str.partition(sep)`     | Splits the string into a 3-tuple: before `sep`, `sep`, and after `sep`.   | `"key=value".partition("=")`   | `('key', '=', 'value')` |

Some string methods in Python allow specifying indices or ranges to narrow down their operation.

| **Method**                           | **Description**                                                                                | **Example**                     | **Output** |
|--------------------------------------|------------------------------------------------------------------------------------------------|---------------------------------|------------|
| `str.startswith(prefix, start, end)` | Checks if the string starts with `prefix` within the range `[start:end]`.                      | `"hello".startswith("e", 1, 4)` | `True`     |
| `str.endswith(suffix, start, end)`   | Checks if the string ends with `suffix` within the range `[start:end]`.                        | `"hello".endswith("l", 0, 3)`   | `True`     |
| `str.find(sub, start, end)`          | Returns the lowest index of `sub` within the range `[start:end]`, or `-1` if not found.        | `"hello".find("l", 3, 5)`       | `3`        |
| `str.index(sub, start, end)`         | Like `find()`, but raises a `ValueError` if `sub` is not found within the range `[start:end]`. | `"hello".index("l", 3, 5)`      | `3`        |
| `str.count(sub, start, end)`         | Counts occurrences of `sub` within the range `[start:end]`.                                    | `"hello".count("l", 0, 4)`      | `2`        |

#### Notes:

- **Indices**: Both `start` and `end` are optional. If omitted, the method considers the entire string.
- **Ranges**: The `end` index is exclusive, meaning the range considered is `[start, end)`.

#### Example Code

```python
text = "hello world"
print(text.startswith("lo", 3))  # True: "lo" starts at index 3
print(text.endswith("lo", 0, 5))  # True: "lo" is in range [0, 5)
print(text.find("o", 5))  # 7: "o" first appears at index 7 starting from index 5
print(text.count("l", 2, 8))  # 2: "l" appears twice in range [2, 8)
``` 

These are especially useful for **substring checks** and **search operations** constrained to specific parts of a
string.

---

### Characters

- A character in a string can be checked for being a digit via:

```python
for letter in s:
    if letter.isdigit():
# Do something
```

- A character can be converted to and integer by `ord('a')`. It can be converted back to character by using
  `chr()`. <br/> **Example:** `letter = chr(ord('a') + 2)`. In this the `letter` would be 'c' `
- A list can be reversed in python via `reversed(list)` method (but it needs to be converted back to list via `list()`
  if needed for more than iteration. Array slicing (in later section) is another way to do
  that.

## Loops

## Math

- Use `pow()` to calculate powers. <br/> **Example:** $ 2^8 $ can be calculated by `pow(2,8)`.
- `math.inf` and `-math.inf` can be used when large negative or positive numbers are needed for initialisation.
- `max()` and `min()` can be used to find the maximum and minimum of the elements. Works both with individual items like
  `max(item1, item2)` or over list like `max(list)`
- `sum()` can be used to calculate sum of the input arguments (list or elements).
- `accumulate()` can be used to create a prefix sum array.
- To find a **random number** we can use: <br/>

```python
import random

# Random float between 0.0 and 1.0
print(random.random())

# Random integer between 1 and 10 inclusive
print(random.randint(1, 10))

# Random float between 5.5 and 9.5
print(random.uniform(5.5, 9.5))

# Random element from a list
print(random.choice(['apple', 'banana', 'cherry']))

# Random 2 unique elements from a list
print(random.sample([10, 20, 30, 40], 2))

# Shuffle a list
my_list = [1, 2, 3, 4]
random.shuffle(my_list)
print(my_list)

```

## Queue

### **`deque` (Double-Ended Queue) in Python**

A `deque` is a **double-ended queue** provided by the `collections` module in Python. It allows fast appends and pops
from both ends of the queue, which makes it ideal for use cases that require efficient queue operations.

### **Common Methods in `deque`:**

| **Method**             | **Description**                                                                    | **Example**            |
|------------------------|------------------------------------------------------------------------------------|------------------------|
| `append(x)`            | Adds an element `x` to the right side of the deque.                                | `d.append(1)`          |
| `appendleft(x)`        | Adds an element `x` to the left side of the deque.                                 | `d.appendleft(2)`      |
| `pop()`                | Removes and returns an element from the right side of the deque.                   | `d.pop()`              |
| `popleft()`            | Removes and returns an element from the left side of the deque.                    | `d.popleft()`          |
| `extend(iterable)`     | Adds all elements of an iterable to the right side of the deque.                   | `d.extend([3, 4, 5])`  |
| `extendleft(iterable)` | Adds all elements of an iterable to the left side of the deque (in reverse order). | `d.extendleft([1, 2])` |
| `rotate(n)`            | Rotates the deque `n` steps to the right. If `n` is negative, rotates left.        | `d.rotate(1)`          |

### **Example Initialisation:**

```python
from collections import deque

# Create an empty deque
d = deque()

# Create q with some elements. Note that it only takes in a list type in the constructor.
d = deque([1, 2, 3])
# Create q with even numbers.
d = deque(x for x in range(n) if x % 2 = 0)

```

### **Advantages over List**:

- **Efficiency**: `deque` operations for adding/removing elements from both ends are faster compared to lists.
- **No Shifting**: Unlike lists, where elements might need to be shifted when performing operations like `pop(0)`,
  `deque` does not have this overhead.

### **Disadvantages**:

- **Access by Index**: `deque` does not support efficient access by index (`O(n)`), whereas lists provide `O(1)` time
  for indexing. Therefore, `deque` is best suited for operations where elements are added/removed from ends.

## Priority Queue

## Set and Map

## Sorting

### Sorting in Python

Python provides powerful and flexible tools for sorting data. Sorting can be performed on lists and other iterable
objects, with support for custom orderings and stable sorting (preserving the relative order of equal elements).

#### **Built-in Sorting Methods**

- **`sorted()`**: Returns a new sorted list from an iterable.
- **`.sort()`**: Sorts a list in place.

| Function     | Example                       | Output            |
|--------------|-------------------------------|-------------------|
| **`sorted`** | `sorted([3, 1, 2])`           | `[1, 2, 3]`       |
| **`.sort`**  | `arr = [3, 1, 2]; arr.sort()` | `arr → [1, 2, 3]` |

#### **Custom Sorting**

Both `sorted()` and `.sort()` support a `key` parameter for custom sorting logic.

| Example                    | Code                                       | Output                    |
|----------------------------|--------------------------------------------|---------------------------|
| **Sort by Length**         | `sorted(['cat', 'zebra', 'dog'], key=len)` | `['cat', 'dog', 'zebra']` |
| **Sort by Absolute Value** | `sorted([-3, -1, 2], key=abs)`             | `[ -1, 2, -3]`            |
| **Descending Order**       | `sorted([3, 1, 2], reverse=True)`          | `[3, 2, 1]`               |

#### **Sorting with Multiple Keys**

To sort using multiple criteria, combine logic in the `key` function.

```python
data = [('John', 25), ('Alice', 30), ('John', 20)]
sorted(data, key=lambda x: (x[0], -x[1]))
# Output: [('John', 25), ('John', 20), ('Alice', 30)]
```

#### **Sorting Dictionaries**

- **By Keys**:
  ```python
  sorted({'b': 2, 'a': 1})
  # Output: ['a', 'b']
  ```
- **By Values**:
  ```python
  sorted({'b': 2, 'a': 1}.items(), key=lambda x: x[1])
  # Output: [('a', 1), ('b', 2)]
  ```

Yes, more complex logic can be passed into Python's `sorted()` or `.sort()` by using the `key` parameter with a
callable, such as a `lambda` or a function. The key function is used to generate a "sort key" for each element, and you
can define this logic to be as complex as needed.

---

### Examples of Custom Sorting with Complex Logic

#### **Sorting by Multiple Conditions**

You can combine multiple criteria in the key function:

```python
data = [('Alice', 30, 50000), ('Bob', 25, 60000), ('Alice', 25, 55000)]
# Sort by name, then by age, and then by salary descending
sorted_data = sorted(data, key=lambda x: (x[0], x[1], -x[2]))
print(sorted_data)
# Output: [('Alice', 25, 55000), ('Alice', 30, 50000), ('Bob', 25, 60000)]
```

---

#### **Using a Custom Function as the Key**

For more complex logic, define a separate function instead of a `lambda`:

```python
def custom_key(item):
    name, age, salary = item
    return (name, -salary if name == 'Alice' else salary)


data = [('Alice', 30, 50000), ('Bob', 25, 60000), ('Alice', 25, 55000)]
sorted_data = sorted(data, key=custom_key)
print(sorted_data)
# Output: [('Alice', 25, 55000), ('Alice', 30, 50000), ('Bob', 25, 60000)]
```

#### **Handling Special Cases**

You can include conditional logic in the `key` function:

```python
words = ['banana', 'apple', 'cherry', 'blueberry']
# Sort by length, then alphabetically if lengths are equal
sorted_words = sorted(words, key=lambda x: (len(x), x))
print(sorted_words)
# Output: ['apple', 'banana', 'cherry', 'blueberry']
```

---

#### **Ignoring Case or Custom Transformations**

You can preprocess elements before sorting:

```python
strings = ['Apple', 'banana', 'Cherry', 'apple']
# Case-insensitive sorting
sorted_strings = sorted(strings, key=lambda x: x.lower())
print(sorted_strings)
# Output: ['Apple', 'apple', 'banana', 'Cherry']
```

---

#### **Complex Derived Keys**

Generate complex keys dynamically:

```python
products = [{'name': 'A', 'price': 100, 'rating': 4.5},
            {'name': 'B', 'price': 50, 'rating': 4.7},
            {'name': 'C', 'price': 150, 'rating': 4.2}]

# Sort by highest rating, then lowest price
sorted_products = sorted(products, key=lambda p: (-p['rating'], p['price']))
print(sorted_products)
# Output: [{'name': 'B', 'price': 50, 'rating': 4.7},
#          {'name': 'A', 'price': 100, 'rating': 4.5},
#          {'name': 'C', 'price': 150, 'rating': 4.2}]
```

---

### Key Considerations

- **Efficiency**: The `key` function is called once per element, so complex logic may impact performance for large
  datasets.
- **Stable Sorting**: Python's sort is stable, meaning elements with equal keys will retain their relative order in the
  original list.

By leveraging custom functions and complex logic, you can implement virtually any sorting behavior with Python's
`sorted()` and `.sort()`.

## Sorted Set and Sorted Map

These structures can be used when sorted dict or set is required.

### **Overview**

| **Structure**    | **Description**                                                                                                                                     |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **`SortedDict`** | A dictionary that maintains its keys in sorted order. Useful when you need sorted access to keys, efficient range queries, and ordering operations. |
| **`SortedSet`**  | A set that maintains its elements in sorted order. Allows for efficient insertion, deletion, and access while preserving order.                     |

---

### **Initialization**

| **Structure** | **Initialization Example**                                                                                                                                                  |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SortedDict`  | `from sortedcontainers import SortedDict`<br/>`sorted_dict = SortedDict({5: "five", 1: "one", 3: "three"})`<br/>Automatically sorts keys: `{1: "one", 3: "three", 5: "five"}` |
| `SortedSet`   | `from sortedcontainers import SortedSet`<br/>`sorted_set = SortedSet([5, 1, 3, 1])`<br/>Automatically sorts and removes duplicates: `[1, 3, 5]`                               |

---

### **Key Methods in `SortedDict` and `SortedSet`**

| **Method**                                | **Description**                                                                                                            | **Example**                                                                                      |
|-------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **`keys()`**                              | Returns a `SortedKeysView` of all the keys in sorted order.                                                                | `sorted_dict.keys()` → `SortedKeysView([1, 3, 5])`                                               |
| **`values()`**                            | Returns a `SortedValuesView` of all the values in the dictionary.                                                          | `sorted_dict.values()` → `SortedValuesView(["one", "three", "five"])`                            |
| **`items()`**                             | Returns a `SortedItemsView` of key-value pairs in sorted order.                                                            | `sorted_dict.items()` → `SortedItemsView([(1, "one"), (3, "three"), (5, "five")])`               |
| **`add(value)`** *(SortedSet only)*       | Adds an element to the set while maintaining sorted order.                                                                 | `sorted_set.add(4)`<br/>`sorted_set` → `[1, 3, 4, 5]`                                             |
| **`discard(value)`**                      | Removes an element from the set if it exists; does nothing otherwise.                                                      | `sorted_set.discard(3)`<br/>`sorted_set` → `[1, 5]`                                               |
| **`bisect_left(key)`**                    | Returns the index where `key` would fit in the sorted order, keeping duplicates on the **right**.                          | `sorted_dict.bisect_left(3)` → `1`<br/>`sorted_set.bisect_left(4)` → `2`                          |
| **`bisect_right(key)`**                   | Returns the index where `key` would fit in the sorted order, keeping duplicates on the **left**.                           | `sorted_dict.bisect_right(3)` → `2`<br/>`sorted_set.bisect_right(4)` → `3`                        |
| **`irange(start, end)`**                  | Returns an iterator over the range of keys (or values for `SortedSet`) between `start` and `end` (inclusive or exclusive). | `sorted_dict.irange(2, 4)` → `[3]`<br/>`sorted_set.irange(2, 4, inclusive=(True, False))` → `[3]` |
| **`peekitem(index)`** *(SortedDict only)* | Returns the key-value pair at the specified index.                                                                         | `sorted_dict.peekitem(0)` → `(1, "one")`                                                         |

---

### **Examples with Detailed Explanations**

#### **1. Using `bisect_left` and `bisect_right`**

- **Goal**: Find where to insert a new key or element while maintaining sorted order.

**For `SortedDict`:**

```python
from sortedcontainers import SortedDict

sorted_dict = SortedDict({1: "one", 3: "three", 5: "five"})

# Index to insert key 4 (keeping keys sorted)
index_left = sorted_dict.bisect_left(4)  # Finds position >= 4
print(index_left)  # Output: 2

index_right = sorted_dict.bisect_right(4)  # Finds position > 4
print(index_right)  # Output: 2
```

**For `SortedSet`:**

```python
from sortedcontainers import SortedSet

sorted_set = SortedSet([1, 3, 5])

# Index to insert 4 (keeping elements sorted)
index_left = sorted_set.bisect_left(4)
print(index_left)  # Output: 2

index_right = sorted_set.bisect_right(4)
print(index_right)  # Output: 2
```

#### **2. Using `irange`**

- **Goal**: Retrieve keys (or values for `SortedSet`) within a range.

**For `SortedDict`:**

```python
from sortedcontainers import SortedDict

sorted_dict = SortedDict({1: "one", 3: "three", 5: "five"})

# Get all keys between 2 and 5 inclusive
keys_in_range = list(sorted_dict.irange(2, 5))
print(keys_in_range)  # Output: [3, 5]
```

**For `SortedSet`:**

```python
from sortedcontainers import SortedSet

sorted_set = SortedSet([1, 3, 5])

# Get elements between 2 and 5, excluding 5
elements_in_range = list(sorted_set.irange(2, 5, inclusive=(True, False)))
print(elements_in_range)  # Output: [3]
```

---

## Ordered Dict

`OrderedDict` is a subclass of `dict` in the `collections` module that remembers the order in which items are inserted.

---

### **Key Features**:
1. **Preserves Insertion Order**: Items are iterated in the order they were added.
2. **Efficient Reordering**:
    - Use `move_to_end(key, last=True)` to move a key to the beginning or end.
3. **Dictionary-Like Operations**: Supports all standard `dict` operations (e.g., `get`, `set`, `pop`, etc.).

---

### **Example**:
```python
from collections import OrderedDict

# Create an OrderedDict
od = OrderedDict()
od['a'] = 1
od['b'] = 2
od['c'] = 3

# Access and reorder
od.move_to_end('a')  # Moves 'a' to the end
print(od)  # Output: OrderedDict([('b', 2), ('c', 3), ('a', 1)])

# Remove the first item
od.popitem(last=False)  # Removes 'b'
print(od)  # Output: OrderedDict([('c', 3), ('a', 1)])
```

---

## Lambda function

### Lambda in Python

A **lambda** is an anonymous function in Python, defined using the `lambda` keyword. It can have multiple arguments but
only a single expression, which is returned when the function is called.

#### Syntax:

```python
lambda arguments: expression
```

#### Key Features:

- **Anonymous**: No function name.
- **Compact**: Defined in a single line.
- **Inline Use**: Often used as an argument to higher-order functions like `map`, `filter`, and `sorted`.

#### Examples:

| Use Case                | Code                                               | Output                 |
|-------------------------|----------------------------------------------------|------------------------|
| **Basic Example**       | `square = lambda x: x * x`                         | `square(4)` → `16`     |
| **Multiple Arguments**  | `add = lambda x, y: x + y`                         | `add(3, 5)` → `8`      |
| **Sort with Key**       | `sorted([(1, 'b'), (2, 'a')], key=lambda x: x[1])` | `[(2, 'a'), (1, 'b')]` |
| **Filter Even Numbers** | `list(filter(lambda x: x % 2 == 0, [1, 2, 3]))`    | `[2]`                  |
| **Map to Square**       | `list(map(lambda x: x * x, [1, 2, 3]))`            | `[1, 4, 9]`            |

#### Limitations:

- Limited to a single expression.
- Not ideal for complex logic; use `def` for readability.

## Other important libraries

### `bisect` as a quick way to do binary search over sorted lists

Python provides an internal library called bisect that allows you to perform binary search operations on sorted lists.
Here’s how to use it:

| **Method**     | **Description**                                                                                                     | **Example**                                                    | **Output**     |
|----------------|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|----------------|
| `bisect_left`  | Finds the index to insert an element while maintaining order. Returns the **first valid position** for duplicates.  | `bisect.bisect_left([1, 3, 4, 7], 4)`                          | `2`            |
| `bisect_right` | Finds the index to insert an element while maintaining order. Returns the **next valid position** after duplicates. | `bisect.bisect_right([1, 3, 4, 7], 4)`                         | `3`            |
| `insort_left`  | Inserts an element into the list at the position determined by `bisect_left`.                                       | `lst = [1, 3, 4]; bisect.insort_left(lst, 2)`<br/>`print(lst)`  | `[1, 2, 3, 4]` |
| `insort_right` | Inserts an element into the list at the position determined by `bisect_right`.                                      | `lst = [1, 3, 4]; bisect.insort_right(lst, 2)`<br/>`print(lst)` | `[1, 2, 3, 4]` |

### Notes:

1. Replace `bisect_right` with `bisect` as they are synonymous.
2. Ensure the input list is sorted for accurate results.

