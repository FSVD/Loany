# Loany

Software platform for loan management (My first NodeJS project)

## Key features:

Clustering (Multiprocess), Multiview, Bootstrap & JQuery plugins implementation (datepickers, validators, bootgrid)

## Built With:

Node JS<br>
Express<br>
MySQL<br>
EJS Template view engine<br>
Bootstrap<br>
JQuery<br>

## Installing:

1. Execute "Loany-Schema-and-Mocks.sql" file in MySQL to create a schema and populate your database.
2. Create a .env file in the project root folder with variables listed in the next section and change values with your db user and pwd.
3. Install project dependencies > "npm install".
4. Run project > "npm start".
5. Open yuor web browser and go to "http://localhost:3000"

## Environment variables

NODE_ENV=development<br>

PORT=3000<br>

DEVELOPMENT_DB_NAME=loany<br>
DEVELOPMENT_DB_USER={ your database user }<br>
DEVELOPMENT_DB_PASSWORD={ your database password }<br>

STAGING_DB_NAME=loany<br>
STAGING_DB_USER={ your database user }<br>
STAGING_DB_PASSWORD={ your database password }<br>

PRODUCTION_DB_NAME=loany<br>
PRODUCTION_DB_USER={ your database user }<br>
PRODUCTION_DB_PASSWORD={ your database password }<br>
