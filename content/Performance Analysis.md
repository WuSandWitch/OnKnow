---
cssclasses: 
tags:
  - Knowledge/CS/Algorithm
  - Knowledge/CS/DataStructure
publish: true
---
# Performance Analysis

- space complexity 
- time complexity

## Space Complexity
$$ S(P) = C + S_P(I) $$
- $C$: fixed space requirements
- $S_P(I)$: usage depends on input 

> Time Complexity increase for each recursive.
> ![[Pasted image 20241017232130.png]]

## Time Complexity
$$
T(p) = C + T_P(I)
$$
- $C$: fixed space requirements.
- $T_P(I)$: depends on the input.

## Program step

### Counting method

Introduce variable count into programs
e.g.
```c
float sum (float list[], int n) {
    float tempsum = 0;
    count++; // Assignment operation
    for (int i = 0; i < n; i++) {
        count++; // For loop increment
        tempsum += list[i];
        count++; // Assignment operation
    }
    count++; // For loop final check
    return tempsum;
    count++; // Return statement
}
```
### Tabular Method

For each statement, calculate how many times it is executed and multiply this by the number of steps per execution. Then, sum the contributions from all statements.

e.g.
  ```c
  for (int i = 0; i < n; i++) {
      sum += list[i];
  }
  ```

| Statement            | Times Executed | Steps per Execution | Total Steps |
| -------------------- | -------------- | ------------------- | ----------- |
| `int i = 0;`         | 1              | 1                   | 1           |
| `i < n` (comparison) | n + 1          | 1                   | n + 1       |
| `sum += list[i];`    | n              | 1                   | n           |
| `i++` (increment)    | n              | 1                   | n           |
Total Steps= `1 + (n + 1) + n + n = 3n + 2`


## Asymptotic notation

### Big-O ($O$)
the upper bound of function, $f(n) \leq cg(n)$ for all $n \geq n_0$
### Omega
the lower bound of function, $f(n) \geq cg(n)$ for all $n \geq n_0$

### Theta
the exact bound of function, $c_1g(n) \leq f(n) \leq c_2g(n)$ for all $n \geq n_0$


e.g.
- For $f(n) = 3n + 2$:
	- $f(n) = O(n)$ because $3n + 2 \leq 4n$ for all $n \geq 2$.
	- $f(n) = \Omega(n)$ because $3n + 2 \geq 3n$ for all $n \geq 1$.
	- $f(n) = \Theta(n)$ because $3n \leq 3n + 2 \leq 4n$ for all $n \geq 2$.
- For $f(n) = 10n^2 + 4n + 2$:
    - $f(n) = O(n^2)$ because $10n^2 + 4n + 2 \leq 11n^2$ for all $n \geq 5$.
    - $f(n) = \Omega(n^2)$ because $10n^2 + 4n + 2 \geq n^2$ for all $n \geq 1$.
    - $f(n) = \Theta(n^2)$ because $n^2 \leq 10n^2 + 4n + 2 \leq 11n^2$ for all $n \geq 5$.


%% When it's a while loop
- best case
- worse case
- average case
 %%

