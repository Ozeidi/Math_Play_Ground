# Collatz Conjucture
**The Collatz conjecture** is a conjecture in mathematics that concerns sequences defined as follows: start with any positive integer n. Then each term is obtained from the previous term as follows: if the previous term is even, the next term is one half of the previous term. If the previous term is odd, the next term is 3 times the previous term plus 1. The conjecture is that no matter what value of n, the sequence will always reach 1.
(Wikipedia)
## Statement of the problem
Consider the following operation on an arbitrary positive integer:

- If the number is even, divide it by two.
- If the number is odd, triple it and add one.

In modular arithmetic notation, define the function f as follows: 

<img style="left;" src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ae238aa62598cce67c57371012b818b65d1ad6e3">



The numer of steps it takes a number to reach to 1 is refered to as **Stopping Time** .


In this Notebook we try to explore and visualize some cahracteristic of the Collatz Conjecture.