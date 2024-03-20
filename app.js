const express = require("express");
const path = require('path');
const mysql = require("mysql")
const dotenv = require('dotenv')

dotenv.config({ path: './.env'})

const app = express()

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, // this can be replace by the IP Address of the server we work in
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public'); // set to the current directory
app.use(express.static(publicDirectory));

// Parse URL-encoded bodies (as sent by HTML forms) 
// which is simply grab the data from the form
app.use(express.urlencoded({extended: false}))
// Parse JSON bodies (as sent by API clients) 
app.use(express.json())

app.set('view engine', 'hbs');

db.connect((error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("MYSQL Connected...")
    }
});

// Define Routes
app.use('/', require('./routes/pages.js'));
app.use('/auth', require('./routes/auth.js'))


app.listen(7000, () => {
    console.log("Server start on Port 7000")
});