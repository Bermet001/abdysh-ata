# Используем Node.js для сборки React-приложения
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install --frozen-lockfile

# Копируем весь проект
COPY . .

# Собираем приложение (Vite по умолчанию создает папку dist/)
RUN npm run build && ls -la /app/dist

# Используем легковесный Node.js-образ для раздачи фронта
FROM node:18-alpine

# Устанавливаем `serve` для раздачи фронта
RUN npm install -g serve

# Устанавливаем рабочую директорию
WORKDIR /app

# Проверяем, существует ли папка перед копированием
RUN mkdir -p /app/dist

# Копируем собранное приложение (dist, а не build)
COPY --from=builder /app/dist /app/dist

# Открываем 9001 порт внутри контейнера
EXPOSE 9001

# Запускаем сервер на 9001 порту
CMD ["serve", "-s", "/app/dist", "-l", "80"]
