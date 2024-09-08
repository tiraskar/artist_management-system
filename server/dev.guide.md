## Application startup commands

---

## Development: **npm run dev**

## Production: **npm run prod**

---

## ENVIRONMENT VARIABLES

---

(You may find the environment variables used in this application inside .env.example file)

Create a .env file in the root directory of the application and provide the environment variables
OR
You may export the environment variables directly from the console

---

## DATABASE

---

Enter your database credentials in the /src/config/config.json file
Based on the NODE_ENV it will dynamically connect to the database.

---

## Sequelize commands

---

## Migration

1. Command to generate migration file : **npx sequelize migration:generate --name <migration_name>**
2. Command to migrate the models : **npx sequelize db:migrate**
   This will migrate all the migration files

## Seeders

3. Command to generate seed file : **npx sequelize seed:generate --name <seeder_name>**
4. Command to insert the initial datas from seeders: **npx sequelize db:seed:all**
   This will insert any default values from all the seed files

---

## Log

---

1. When NODE_ENV is set to 'development', the application will log in the console.

2. WHEN NODE_ENV is set to 'production', the application will log in the .log file.
   Each day a new log file will be created and it would have the name as following
   application-{currentDate}.log
   For example, application-2024-08-08.log

NOTE: The application keeps only the last seven days' worth of log files.
Older files are automatically deleted.

---
