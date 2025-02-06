# Используем Node.js для сборки React-приложения
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install --frozen-lockfile

# Копируем весь проект
COPY . .

# Проверяем, создается ли билд перед копированием
RUN npm run build && ls -la /app/build

# Используем легковесный Node.js-образ для раздачи фронта
FROM node:18-alpine

# Устанавливаем `serve` для раздачи фронта
RUN npm install -g serve

# Устанавливаем рабочую директорию
WORKDIR /app

# Проверяем, существует ли папка перед копированием
RUN mkdir -p /app/build

# Копируем собранное приложение
COPY --from=builder /app/build /app/build

# Открываем 9001 порт внутри контейнера
EXPOSE 9001

# Запускаем сервер на 9001 порту
CMD ["serve", "-s", "/app/build", "-l", "9001"]
