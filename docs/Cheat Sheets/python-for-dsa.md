# Python knowledge for DSA

## General

### Characters

- A character in a string can be checked for being a digit via:

```python
for letter in s:
    if letter.isdigit():
# Do something
```

- A character can be converted to and integer by `ord('a')`. It can be converted back to character by using
  `chr()`. <br> **Example:** `letter = chr(ord('a') + 2)`. In this the `letter` would be 'c' `
- A list can be reversed in python via `reversed(list)` method. Array slicing (in later section) is another way to do
  that.

## Conditions

## List

### Array Slicing

### Using as a stack

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

## Tuples

## String

| **Method**            | **Description**                                                                                              | **Example**                                                   | **Output**                          |
|------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------|
| `str.lower()`          | Converts all characters to lowercase.                                                                    | `"Hello".lower()`                                            | `'hello'`                           |
| `str.upper()`          | Converts all characters to uppercase.                                                                    | `"Hello".upper()`                                            | `'HELLO'`                           |
| `str.strip([chars])`   | Removes leading and trailing characters (default: whitespace).                                           | `"  hello  ".strip()`                                        | `'hello'`                           |
| `str.find(sub)`        | Returns the index of the first occurrence of `sub`, or `-1` if not found.                                | `"hello".find("e")`                                          | `1`                                 |
| `str.index(sub)`       | Like `find()`, but raises `ValueError` if `sub` is not found.                                             | `"hello".index("e")`                                         | `1`                                 |
| `str.count(sub)`       | Counts the occurrences of `sub` in the string.                                                           | `"hello".count("l")`                                         | `2`                                 |
| `str.replace(old, new)`| Replaces all occurrences of `old` with `new`.                                                            | `"hello".replace("l", "p")`                                  | `'heppo'`                           |
| `str.split([sep])`     | Splits the string into a list using `sep` (default: whitespace).                                          | `"a,b,c".split(",")`                                         | `['a', 'b', 'c']`                   |
| `str.join(iterable)`   | Joins elements of an iterable with the string as a separator.                                            | `" ".join(["hello", "world"])`                               | `'hello world'`                     |
| `str.startswith(prefix)`| Returns `True` if the string starts with the specified prefix.                                           | `"hello".startswith("he")`                                   | `True`                              |
| `str.endswith(suffix)` | Returns `True` if the string ends with the specified suffix.                                             | `"hello".endswith("lo")`                                     | `True`                              |
| `str.isdigit()`        | Returns `True` if all characters are digits.                                                             | `"123".isdigit()`                                            | `True`                              |
| `str.isalpha()`        | Returns `True` if all characters are alphabetic.                                                         | `"abc".isalpha()`                                            | `True`                              |
| `str.isalnum()`        | Returns `True` if all characters are alphanumeric.                                                       | `"abc123".isalnum()`                                         | `True`                              |
| `str.partition(sep)`   | Splits the string into a 3-tuple: before `sep`, `sep`, and after `sep`.                                   | `"key=value".partition("=")`                                 | `('key', '=', 'value')`             |

Some string methods in Python allow specifying indices or ranges to narrow down their operation.

| **Method**                 | **Description**                                                                                              | **Example**                                                                | **Output**   |
|-----------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|--------------|
| `str.startswith(prefix, start, end)` | Checks if the string starts with `prefix` within the range `[start:end]`.                              | `"hello".startswith("e", 1, 4)`                                           | `True`       |
| `str.endswith(suffix, start, end)`   | Checks if the string ends with `suffix` within the range `[start:end]`.                                | `"hello".endswith("l", 0, 3)`                                             | `True`       |
| `str.find(sub, start, end)`          | Returns the lowest index of `sub` within the range `[start:end]`, or `-1` if not found.                | `"hello".find("l", 3, 5)`                                                 | `3`          |
| `str.index(sub, start, end)`         | Like `find()`, but raises a `ValueError` if `sub` is not found within the range `[start:end]`.         | `"hello".index("l", 3, 5)`                                                | `3`          |
| `str.count(sub, start, end)`         | Counts occurrences of `sub` within the range `[start:end]`.                                            | `"hello".count("l", 0, 4)`                                                | `2`          |

### Notes:
- **Indices**: Both `start` and `end` are optional. If omitted, the method considers the entire string.
- **Ranges**: The `end` index is exclusive, meaning the range considered is `[start, end)`.

### Example Code
```python
text = "hello world"
print(text.startswith("lo", 3))          # True: "lo" starts at index 3
print(text.endswith("lo", 0, 5))         # True: "lo" is in range [0, 5)
print(text.find("o", 5))                 # 7: "o" first appears at index 7 starting from index 5
print(text.count("l", 2, 8))             # 2: "l" appears twice in range [2, 8)
``` 

These are especially useful for **substring checks** and **search operations** constrained to specific parts of a string.

## Loops

## Math

- Use `pow()` to calculate powers. <br> **Example:** $ 2^8 $ can be calculated by `pow(2,8)`.
- `math.inf` and `-math.inf` can be used when large negative or positive numbers are needed for initialisation.
- `max()` and `min()` can be used to find the maximum and minimum of the elements. Works both with individual items like
  `max(item1, item2)` or over list like `max(list)`
- `sum()` can be used to calculate sum of the input arguments (list or elements).
- To find a **random number** we can use: <br>

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

-

## Queue

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
| `SortedDict`  | `from sortedcontainers import SortedDict`<br>`sorted_dict = SortedDict({5: "five", 1: "one", 3: "three"})`<br>Automatically sorts keys: `{1: "one", 3: "three", 5: "five"}` |
| `SortedSet`   | `from sortedcontainers import SortedSet`<br>`sorted_set = SortedSet([5, 1, 3, 1])`<br>Automatically sorts and removes duplicates: `[1, 3, 5]`                               |

---

### **Key Methods in `SortedDict` and `SortedSet`**

| **Method**                                | **Description**                                                                                                            | **Example**                                                                                      |
|-------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **`keys()`**                              | Returns a `SortedKeysView` of all the keys in sorted order.                                                                | `sorted_dict.keys()` → `SortedKeysView([1, 3, 5])`                                               |
| **`values()`**                            | Returns a `SortedValuesView` of all the values in the dictionary.                                                          | `sorted_dict.values()` → `SortedValuesView(["one", "three", "five"])`                            |
| **`items()`**                             | Returns a `SortedItemsView` of key-value pairs in sorted order.                                                            | `sorted_dict.items()` → `SortedItemsView([(1, "one"), (3, "three"), (5, "five")])`               |
| **`add(value)`** *(SortedSet only)*       | Adds an element to the set while maintaining sorted order.                                                                 | `sorted_set.add(4)`<br>`sorted_set` → `[1, 3, 4, 5]`                                             |
| **`discard(value)`**                      | Removes an element from the set if it exists; does nothing otherwise.                                                      | `sorted_set.discard(3)`<br>`sorted_set` → `[1, 5]`                                               |
| **`bisect_left(key)`**                    | Returns the index where `key` would fit in the sorted order, keeping duplicates on the **right**.                          | `sorted_dict.bisect_left(3)` → `1`<br>`sorted_set.bisect_left(4)` → `2`                          |
| **`bisect_right(key)`**                   | Returns the index where `key` would fit in the sorted order, keeping duplicates on the **left**.                           | `sorted_dict.bisect_right(3)` → `2`<br>`sorted_set.bisect_right(4)` → `3`                        |
| **`irange(start, end)`**                  | Returns an iterator over the range of keys (or values for `SortedSet`) between `start` and `end` (inclusive or exclusive). | `sorted_dict.irange(2, 4)` → `[3]`<br>`sorted_set.irange(2, 4, inclusive=(True, False))` → `[3]` |
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
| `insort_left`  | Inserts an element into the list at the position determined by `bisect_left`.                                       | `lst = [1, 3, 4]; bisect.insort_left(lst, 2)`<br>`print(lst)`  | `[1, 2, 3, 4]` |
| `insort_right` | Inserts an element into the list at the position determined by `bisect_right`.                                      | `lst = [1, 3, 4]; bisect.insort_right(lst, 2)`<br>`print(lst)` | `[1, 2, 3, 4]` |

### Notes:

1. Replace `bisect_right` with `bisect` as they are synonymous.
2. Ensure the input list is sorted for accurate results.

