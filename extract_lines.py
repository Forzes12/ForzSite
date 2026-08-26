with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Print lines 8940 to 8980 (showAuthModal function)
for i in range(8939, min(8980, len(lines))):
    print(f"{i+1}: {lines[i]}", end='')