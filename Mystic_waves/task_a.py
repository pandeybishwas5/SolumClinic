import sys

def main():
    """
    Mystic Waves Problem:
    For each test case with values x and n:
    - The energy alternates as x, -x, x, -x, ...
    - If n is even → total energy = 0
    - If n is odd → total energy = x
    """

    # Read all input at once
    data = sys.stdin.read().strip().split()

    # Handle case where input is empty or invalid
    if not data:
        print("No input provided.")
        return

    try:
        t = int(data[0])
    except (ValueError, IndexError):
        print("Invalid input format.")
        return

    if len(data) < 1 + 2 * t:
        print("Incomplete test case data.")
        return

    results = []
    idx = 1

    for _ in range(t):
        try:
            x = int(data[idx])
            n = int(data[idx + 1])
            idx += 2
        except (ValueError, IndexError):
            results.append("Invalid test case.")
            continue

        results.append(str(x if n % 2 else 0))

    # Output all results at once
    print("\n".join(results))


if __name__ == "__main__":
    main()
