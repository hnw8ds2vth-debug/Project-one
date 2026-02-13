# Alley Cat Music Store

## Запуск проекта

Все команды выполняйте из папки **Project-one** (корень проекта).

### 1. Backend (API на порту 3005)

```bash
npm start
```

или

```bash
npm run start:server
```

### 2. Frontend (Angular)

В **отдельном** терминале:

```bash
npm run start:app
```

### Порядок запуска

1. Сначала запустите backend (`npm start`)
2. Затем frontend (`npm run start:app`)
3. Откройте в браузере http://localhost:4200

Если backend не запущен, сайт будет показывать «Загрузка артистов…» или ошибку подключения.
