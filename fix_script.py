import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the "Назад к поиску" button - remove loadAllUsers call since it auto-loads now
content = content.replace(
    "onclick=\"switchPage('users-search-page'); loadAllUsers();\"",
    "onclick=\"switchPage('users-search-page')\""
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")