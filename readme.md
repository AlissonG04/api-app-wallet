# Wallet App Api (Back-end)

## Intro

This is an API created using Node.js, Express and PostgresSQL.

## Requeriments

-Node.js
-Docker

## Documentation:

Use insomnia to import the file bellow:
https://github.com/AlissonG04/api-app-wallet/blob/main/Insomnia.json

## Steps tp run the project

1. Clone the project

```
git clone https://github.com/AlissonG04/api-app-wallet.git
```

2. Navigate to project folder and Install Dependencies

```
cd wallet-app-backed
npm install
```

3. Create an Postgres instaces no docker.

```

Example:
docker run --name postgres-finances -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -p 5432:5432 -d -t postgres
```

4. Create a .env file following the example:

```
PORT=3000
You can use for database
DB_URL=you_db_url

or

DB_USER=docker
DB_PASSWORD=docker
DB_NAME=finances
DB_HOST=localhost
DB_PORT=5432
```

5. Run config script to create database and tables:

```
npm run config:init
```

6. Run the project in dv version:

```
npm run start:dev
```

7. Run the project in final version:

```
npm run start
```
