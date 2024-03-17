# Instructions on running the `nodejsmysql` project
## Download XAMPP and start this execution file in the extracted folder:
`xampp-control.exe `
   
## Use the following cmd lines to create the npm (runtime env) and make the npm run nodemon whenever it starts.

`npm init -y`

`npm i express mysql dotenv hbs`

`npm i --save nodemon`

`npm start`

## Essential links: 

`http://localhost:7000/` to view the website

`http://localhost/phpmyadmin/` to access phpmyadmin and manage the database

## Notes on `app.js`:

The file `./.env ` can also be named as `database.env` or `password.env`, etc.
`process.env.DATABASE_HOST` and similar variables are declared in `.env`
