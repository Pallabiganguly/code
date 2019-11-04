const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res)=> res.send('hello test'));

app.listen(port, () => console.log('listining in the port 3001'));

