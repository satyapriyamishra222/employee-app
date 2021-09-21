import * as express from 'express';
import * as chalk from 'chalk';
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3008;
console.log(PORT);

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});
app.listen(PORT, () => {
    console.log(chalk.yellowBright(`App running   ${PORT}`));
});