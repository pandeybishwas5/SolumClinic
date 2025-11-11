# CargoCraft Fleet — Problem Solution

## Problem Description
In the futuristic world of Aerion, the CargoCraft company operates a fleet of transport vehicles designed to carry supplies between colonies.  

- Type A crafts have 4 propulsion units  
- Type B crafts have 6 propulsion units  

You receive a report that the fleet’s crafts together have `n` propulsion units.  
Determine the **minimum and maximum number of crafts** that can make up `n`.  
If it’s impossible, output `-1`.

---

## Input Format
- The first line contains an integer `t` — number of test cases  
- Each of the next `t` lines contains one integer `n` — total propulsion units  

**Constraints:**
1 ≤ t ≤ 1000
1 ≤ n ≤ 10^18

## Output Format
For each test case, print two integers:
x y
- `x` = minimum number of crafts  
- `y` = maximum number of crafts  

If impossible, print:
-1

## Approach and Logic

1. **Maximum crafts:** Use all Type A (4-unit) crafts → `max_crafts = n // 4`  
2. **Minimum crafts:** Use as many Type B (6-unit) crafts as possible → `min_crafts = n // 6`  
   - If remainder = 0 → exact division  
   - If remainder = 4 → add one Type A craft  
   - If remainder = 2 → impossible  
3. **Impossible check:**  
   - Odd `n` → impossible (cannot form with even 4s and 6s)  
   - n < 4 → impossible

**Key:** Only arithmetic and modulo operations → O(1) per test case.

## Edge Cases Handled

✅ Works for all test cases, including:
- Very large n (up to 10^18)
- Impossible numbers (like 7)
- Minimum possible n = 1, 2, 3
- Odd numbers → automatically output -1

## Time and Memory Limit Safety

- Time Limit: 1 second per test

Solution is O(1) per test case, only arithmetic and modulo operations.

Even with t = 1000 and n = 10^18, all cases compute instantly.

Memory Limit: 256 MB per test

Stores only inputs and output strings → minimal memory use

No large arrays or loops storing combinations

Conclusion: Safe and efficient under all problem constraints.