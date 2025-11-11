# Mystic Waves — Problem Solution

## Problem Description
In the land of Elaria, a young mage named Nia experiments with a magical energy value `x`.  
She casts a spell that produces a sequence of `n` energy waves — alternating between `x` and `−x`, starting with `x`.

For example, if `n = 5`, the sequence is:
x, -x, x, -x, x

Nia wants to determine the total magical energy after all `n` waves.

## Input Format
- The first line contains an integer `t` — the number of test cases.  
- Each of the next `t` lines contains two integers `x` and `n`.

**Constraints:**
1 ≤ t ≤ 100  
1 ≤ x, n ≤ 10

## Output Format
For each test case, print a single integer — the total magical energy after `n` waves.

## Logic Explanation
- The sequence alternates between +x and −x.  
- When `n` is even, each +x cancels with a −x → total = 0  
- When `n` is odd, there’s one extra +x → total = x  

Hence:
total_energy = x if n is odd else 0

## How to Run
1. Prepare your input file named test.txt in the same directory as task_a.py or edit any of the existing test cases files.
2. Run the program in terminal:
python task_a.py < test.txt

## Note

✅ This code works for all valid and edge cases, including:
- Empty input file
- Missing or incomplete test case data
- Non-numeric or malformed input
- Mixed odd/even sequences
- It provides graceful error messages for invalid inputs instead of crashing.

## Complexity Analysis

- Time Complexity: O(t)
- Space Complexity: O(1)

## Technologies Used

- Python 3.x
- Standard Input/Output (no external libraries)