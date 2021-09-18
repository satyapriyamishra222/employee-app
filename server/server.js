const express = require('express');
const path = require ('path');
const chalk = require('chalk');
require('dotenv').config({path: __dirname + '/.env'});


const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});
app.listen(PORT, (err) => {
    if (err) {
        console.log('Some error occured');
    }
    console.log(chalk.yellowBright(`App running on ${PORT}`));
});