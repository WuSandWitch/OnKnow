---
cssclasses: 
tags:
  - Knowledge/Math/DiscreteMath
publish: true
---
# Propositional Logic


## Proposition

A proposition is a declaration that is either `true` or `false`.
e.g.
- The Moon is made of green cheese.
- 1 + 1 = 2

What is not:
- Sit down!
- x + y = z

## Propositional Language

- Proposition Variables
	- $p,q,r,s$
- Proposition result
	- always `true` denoted by $T$
	- always `false` denoted by $F$
- Compound proposition, construct from logic connective
	- Negation： $\neg$  (not)
	- Conjunction： $\land$  (and)
	- Disjunction： $\lor$  (or)
	- Implication： $\Rightarrow$
	- Biconditional: $\Leftrightarrow$

e.g.
$Let \ p,...\ be \ proposition(s) \newline$
$p \land q, the\ conjunction\ of \ p \ and \ q, \ is \ the \ proposion \ "p \ and \ q"$

## Compound Proposition

Logical Connective (Logical Operator)

- **Negation (¬):** Denotes "not p"
 - Example: If p = "The Earth is round," then ¬p = "The Earth is not round."
- **Conjunction (∧):** Denotes "p and q"
 - Example: "I am at home and it is raining."
- **Disjunction (∨):** Denotes "p or q" (inclusive)
 - Example: "I am at home or it is raining."
 - **Inclusive Or:** True if at least one of p or q is true.
- **Exclusive Or (⊕):** Denotes "either p or q but not both"
 - Example: "You can have soup or salad, but not both."
 - **Exclusive or**: True if only one of p or is true.
- **Implication (→):** Denotes "If p, then q"
 - Example: "If I am at home, then it is raining."
- **Biconditional (↔):** Denotes "p if and only if q"
 - Example: "I am at home if and only if it is raining."


### Negation (¬)
- not
- The negation of a proposition $p$, denoted $\neg p$, is true if and only if $p$ is false.

| $p$ | $\neg p$ |
| --- | -------- |
| T   | F        |
| F   | T        |

- **Example:** If $p$ represents "It is raining," then $\neg p$ represents "It is not raining."

### Conjunction (∧)
- and
- The conjunction of two propositions $p$ and $q$, denoted $p \land q$, is true if and only if both $p$ and $q$ are true.

| $p$  | $q$  | $p \land q$ |
|------|------|-------------|
|  T   |  T   |     T       |
|  T   |  F   |     F       |
|  F   |  T   |     F       |
|  F   |  F   |     F       |

- **Example:** If $p$ represents "I am at home" and $q$ represents "It is raining," then $p \land q$ represents "I am at home and it is raining."

### Disjunction (∨)
- or
- The disjunction of two propositions $p$ and $q$, denoted $p \lor q$, is true if and only if at least one of $p$ or $q$ is true (inclusive or).

| $p$  | $q$  | $p \lor q$ |
|------|------|------------|
|  T   |  T   |    T       |
|  T   |  F   |    T       |
|  F   |  T   |    T       |
|  F   |  F   |    F       |

- **Example:** If $p$ represents "I am at home" and $q$ represents "It is raining," then $p \lor q$ represents "I am at home or it is raining."

### Exclusive Or (⊕)
- or .. but not both
- The exclusive or (XOR) of two propositions $p$ and $q$, denoted $p \oplus q$, is true if and only if exactly one of $p$ or $q$ is true, but not both.

| $p$  | $q$  | $p \oplus q$ |
|------|------|--------------|
|  T   |  T   |      F       |
|  T   |  F   |      T       |
|  F   |  T   |      T       |
|  F   |  F   |      F       |

- **Example:** If $p$ represents "I am at home" and $q$ represents "It is raining," then $p \oplus q$ represents "Either I am at home or it is raining, but not both."

### [[Logical Implication]] ($\implies$)

### Biconditional (↔)
- Expression
	- $p$ is necessary and sufficient for $q$
	- if $p$ then $q$, and conversly
	- $p$ iff $q$
- The biconditional of two propositions $p$ and $q$, denoted $p \leftrightarrow q$, is true if and only if both $p$ and $q$ have the same truth value (both true or both false). The biconditional $p \leftrightarrow q$ can be read as "$p$ if and only if $q$."
- Which is opposite to exclusive or.

| $p$  | $q$  | $p \leftrightarrow q$ |
|------|------|-----------------------|
|  T   |  T   |          T            |
|  T   |  F   |          F            |
|  F   |  T   |          F            |
|  F   |  F   |          T            |

- **Example:** If $p$ represents "I am at home" and $q$ represents "It is raining," then $p \leftrightarrow q$ represents "I am at home if and only if it is raining."

1. **Implication** ($p \Rightarrow q$):
   $p \Rightarrow q \equiv \neg p \lor q$

2. **Converse** ($q \Rightarrow p$): 逆命題
   $q \Rightarrow p \equiv \neg q \lor p$

3. **Contrapositive** ($\neg q \Rightarrow \neg p$): 對偶命題/逆否命題
   $\neg q \Rightarrow \neg p \equiv q \lor \neg p$

4. **Inverse** ($\neg p \Rightarrow \neg q$): 否命題
   $\neg p \Rightarrow \neg q \equiv p \lor \neg q$


[[Application of Propositional Logic]]


[[Propositional Equivalences]]




## Truth table
