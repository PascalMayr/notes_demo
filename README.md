# DEMO Notes App

## Dev setup

1. From the root of the directory run
```
cd client && npm i && cd ../server && npm i && cd ../
```

This install all necessary dependencies.

2. [Install Postgres](https://www.postgresql.org/download/) on your os and create a new "notes" db

3. Create a .env file in the server folder and set your [postgres database connection string](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING)
```
DATABASE_URL="postgresql://..."
```

4. Run migrations
```
npx prisma migrate dev
```

5. Run
```
cd client && npm start
```

6. Open another terminal and run
```
cd server && npm run dev
```

## API Docs
To see the API Documentation open http://localhost:3001/api-docs/
