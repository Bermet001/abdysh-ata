# Используем официальный образ Node.js для сборки
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install --frozen-lockfile

# Копируем весь проект
COPY . .

# Собираем приложение
RUN npm run build

# Используем легковесный Node.js-образ для раздачи фронта
FROM node:18-alpine

# Устанавливаем `serve` для раздачи фронта
RUN npm install -g serve

# Копируем собранное приложение
WORKDIR /app
COPY --from=builder /app/build .

# Открываем 9001 порт внутри контейнера
EXPOSE 9001

# Запускаем сервер на 9001 порту
CMD ["serve", "-s", ".", "-l", "9001"]
