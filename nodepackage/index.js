const express = require('express')
const app = express()
const port = 4000
var logger =  require('console-log-color')


logger.green('This is your captain speaking!');
logger.bold.underline.red('Please fasten your seat-belt');
logger.strike('Oops');
logger.bgAqua.brown.underline('We are going through turbulance!');
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))