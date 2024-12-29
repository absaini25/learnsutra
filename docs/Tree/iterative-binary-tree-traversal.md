# Iterative binary tree traversal

To perform an **iterative inorder traversal** of a Binary Search Tree (BST), we can use a stack to simulate the recursive call stack.

### **Steps for Iterative Inorder Traversal**:

1. **Initialize a stack** to keep track of nodes.
2. **Traverse the left subtree**: Move down the left child of the current node, pushing all left children onto the stack.
3. **Visit the node**: Once there are no more left children, pop from the stack and process the node.
4. **Traverse the right subtree**: After processing the current node, move to its right child and repeat the process.

### **Python Code for Iterative Inorder Traversal**:

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def inorderTraversal(self, root: TreeNode):
        stack = []
        result = []
        current = root

        while current or stack:
            # Go to the leftmost node and push all the nodes on the path to stack
            while current:
                stack.append(current)
                current = current.left

            # Pop the node from the stack and visit it
            current = stack.pop()
            result.append(current.val)

            # Move to the right subtree
            current = current.right

        return result
```

### **Explanation**:

1. **While loop**: Continue as long as the `current` node is not `None` or the stack is not empty.
2. **Push left nodes**: Traverse as far left as possible, pushing each node to the stack.
3. **Visit nodes**: Pop from the stack and append the value to the result list.
4. **Move to right subtree**: After visiting a node, move to its right child.

### **Dry Run**:

For a BST like this:

```
      4
     / \
    2   6
   / \ / \
  1  3 5  7
```

1. Start with `root = 4`.
2. Move left to `2`, then to `1`, and push the nodes onto the stack.
3. Pop `1`, visit it, then move back to `2` and visit it.
4. Move to `3`, visit it, then move back to `4` and visit it.
5. Move right to `6`, then to `5`, visit `5`, then `6`, and finally visit `7`.

Result: `[1, 2, 3, 4, 5, 6, 7]`.

### **Time Complexity**:
- **O(n)**: Each node is visited once.

### **Space Complexity**:
- **O(h)**: The stack stores the path from the current node to the leftmost node, where `h` is the height of the tree. In the worst case (unbalanced tree), it will be `O(n)`. For a balanced tree, it's `O(log n)`.

This approach avoids recursion while still following the left-root-right traversal order, which is the essence of inorder traversal.