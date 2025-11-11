"""
CargoCraft Fleet Problem

Description:
This program computes the minimum and maximum number of cargo crafts
needed to reach a total number of propulsion units 'n', given two
types of crafts:
- Type A: 4 propulsion units
- Type B: 6 propulsion units

The program handles impossible cases gracefully and works with both
manual terminal input and standard input from a text file.
"""

def cargo_craft_fleet():
    import sys
    lines = sys.stdin.read().splitlines()

    # Handle case when input is empty
    if not lines:
        print("No input provided.")
        return

    # Read number of test cases
    try:
        t = int(lines[0].strip())
    except ValueError:
        print("Invalid input for number of test cases.")
        return

    # Check if there are enough lines for all test cases
    if len(lines) < t + 1:
        print("Incomplete test case data.")
        return
    
    # Warn if there are extra lines beyond the expected number of test cases
    if len(lines) > t + 1:
        print(f"Warning: {len(lines)-1-t} extra test case(s) ignored.")

    # List to store results for each test case
    results = []

    # Process each test case
    for line in lines[1: t+1]:
        try:
            n = int(line.strip())  
        except ValueError:
            results.append("-1") 
            continue

        # Check if n is impossible: odd numbers or less than 4 cannot be formed
        if n % 2 != 0 or n < 4:
            results.append("-1")
            continue

        # Compute maximum crafts: assume all crafts are Type A (4 units each)
        max_crafts = n // 4

        # Compute minimum crafts: use as many Type B (6 units) as possible
        min_crafts = n // 6
        remainder = n % 6  # Remaining propulsion units after Type B crafts

        # Adjust minimum crafts based on remainder
        if remainder == 0:
            # Perfectly divisible by 6, min_crafts is correct
            pass
        elif remainder == 4:
            # One additional Type A craft needed to reach total
            min_crafts += 1
        else:
            # Any other remainder (2 or odd numbers) is impossible
            results.append("-1")
            continue

        # Append result for this test case in "min max" format
        results.append(f"{min_crafts} {max_crafts}")

    # Output all results at once, one per line
    print("\n".join(results))



if __name__ == "__main__":
    cargo_craft_fleet()
