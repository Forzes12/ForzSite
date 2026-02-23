import json
import ast

with open('assets/data/games.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Удаляем const и точку с запятой
content = content.replace('const gameData = ', '').replace(';', '')

# Безопасный парсинг
gameData = ast.literal_eval(content)  # Только для структур данных, не для кода

# Записываем
with open('assets/data/games.json', 'w', encoding='utf-8') as f:
    json.dump(gameData, f, indent=4, ensure_ascii=False)