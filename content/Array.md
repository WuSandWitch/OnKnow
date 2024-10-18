---
cssclasses: 
tags:
  - Knowledge/CS/DataStructure
publish: true
---
# Array
## Array as [[ADT]]

An array is a collection of pairs in the form `<index, value>`.

### Operations
1. **Retrieve a value at a given index**: This operation allows accessing the element stored at a specific position.
2. **Store a value at a given index**: This operation enables updating or assigning a value to a specific position in the array.
These operations are performed in constant time $O(1)$.

### Address calculation
Implemented using **contiguous memory allocation**. This memory arrangement allows direct calculation of the address.
$$
\text{Address of element}= \text{Base address} + (\text{Index} \times \text{Size of data type})
$$

### C Implementation
Using a syntax like `int list[5];`, which reserves space for five integers. The array elements can be accessed through indexing (e.g., `list[0]`, `list[1]`) or pointer arithmetic (e.g., `(list + i)`).

In C, arrays can also be treated as pointers. For example, `list2` (an array) acts like a pointer to its first element, `list2[0]`. This means that `list2[i]` is equivalent to `*(list2 + i)`.


### Advantages and Limitations
    
- **Advantages**: Arrays provide fast access to elements and efficient use of memory for homogeneous data storage.
- **Limitations**: The size of an array must be defined at the time of declaration, and resizing an array requires creating a new array and copying the data.