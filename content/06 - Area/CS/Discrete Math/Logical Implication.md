---
cssclasses: 
tags:
  - Knowledge/Math/DiscreteMath
publish: true
---

# Implication (→)

## Formal Statement
The implication of two propositions $p$ and $q$, denoted $p \rightarrow q$, is true if and only if either $p$ is false or $q$ is true. The implication $p \rightarrow q$ can be read as "If $p$, then $q$."
## Truth Table

| $p$ | $q$ | $p \rightarrow q$ |
| --- | --- | ----------------- |
| T   | T   | T                 |
| T   | F   | F                 |
| F   | T   | T                 |
| F   | F   | T                 |
## Example
If $p$ represents "I am at home" and $q$ represents "It is raining," then $p \rightarrow q$ represents "If I am at home, then it is raining."


## Different Ways of Express Implication

![[Pasted image 20240919002410.png]]



## Converse, Contrapositive, and Inverse

- **Converse:** Reverses the hypothesis and conclusion ($q \rightarrow p$).
- **Inverse:** Negates both the hypothesis and conclusion ($\neg p \rightarrow \neg q$).
- **Contrapositive:** Reverses and negates both the hypothesis and conclusion ($\neg q \rightarrow \neg p$), and is logically equivalent to the original implication.


### Implication (p → q)
   - The implication $p \rightarrow q$ is read as "If $p$, then $q$."
   - **Example:** "If it is raining, then the ground is wet."
   - Hypothesis (antecedent): $p$ ("It is raining")
   - Conclusion (consequent): $q$ ("The ground is wet")

| $p$ | $q$ | $p \rightarrow q$ |
| --- | --- | ----------------- |
| T   | T   | T                 |
| T   | F   | F                 |
| F   | T   | T                 |
| F   | F   | T                 |


### Converse (逆命題)
   - **Definition:** The converse of $p \rightarrow q$ is $q \rightarrow p$, where the roles of $p$ and $q$ are reversed.
   - **Example:** "If the ground is wet, then it is raining."
   - **Key Point:** The converse is **not logically equivalent** to the original implication. The truth values of $p \rightarrow q$ and $q \rightarrow p$ may differ.
   - **Truth Table for Converse:**
   
| $p$  | $q$  | $p \rightarrow q$ | $q \rightarrow p$ |
|------|------|-------------------|-------------------|
|  T   |  T   |         T         |         T         |
|  T   |  F   |         F         |         T         |
|  F   |  T   |         T         |         F         |
|  F   |  F   |         T         |         T         |

### Inverse (否命題)
   - **Definition:** The inverse of $p \rightarrow q$ is $\neg p \rightarrow \neg q$, which negates both the hypothesis and the conclusion of the original implication.
   - **Example:** "If it is not raining, then the ground is not wet."
   - **Key Point:** The inverse is also **not logically equivalent** to the original implication.
   - **Truth Table for Inverse:**

| $p$  | $q$  | $p \rightarrow q$ | $\neg p \rightarrow \neg q$ |
|------|------|-------------------|-----------------------------|
|  T   |  T   |         T         |             T               |
|  T   |  F   |         F         |             T               |
|  F   |  T   |         T         |             F               |
|  F   |  F   |         T         |             T               |

### Contrapositive (對偶命題)
   - **Definition:** The contrapositive of $p \rightarrow q$ is $\neg q \rightarrow \neg p$, which negates both $p$ and $q$ and flips their positions.
   - **Example:** "If the ground is not wet, then it is not raining."
   - **Key Point:** The contrapositive **is logically equivalent** to the original implication. If $p \rightarrow q$ is true, then $\neg q \rightarrow \neg p$ is also true, and vice versa.
   - **Truth Table for Contrapositive:**

| $p$  | $q$  | $p \rightarrow q$ | $\neg q \rightarrow \neg p$ |
|------|------|-------------------|-----------------------------|
|  T   |  T   |         T         |             T               |
|  T   |  F   |         F         |             F               |
|  F   |  T   |         T         |             T               |
|  F   |  F   |         T         |             T               |


