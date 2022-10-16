# Rick and morty test case app

## How to use this repo

Use the apollo server to create app

There are 2 main folders:

- `server`: The starting point of our GraphQL server.
- `client`: The starting point of our React application.

To get started:

1. Navigate to the `server` folder.
1. Run `npm install`.
1. Run `npm start`.

This will start the GraphQL API server.

In another Terminal window,

1. Navigate to the `client` folder.
1. Run `npm install`.
1. Run `npm start`.

This will open up `localhost:3000` in your web browser.

## Реализовано

### Back
- аполло сервер, 
- дата подгружается через аксиос 
- кешируется в редис постранично. Данные кешируются постранично, т.к. нам не нужно иметь доступ к отдельным сущностям из массива данныых

### Front
- клиент на реакте
- material ui
- кастомный хук для реализации запроса с бека
- кастомный хук для реализации пагинации: номер страницы сохраняется в localStorage
- кеширование запросов на бек через встроенную поддержку клиента аполло