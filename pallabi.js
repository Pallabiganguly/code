const express = require('express');
const app = express();
const port = 3001;
const router = require('./api/router/test');

app.get('/', (req, res)=> res.send('hello test'));
app.use('/test', router);

app.listen(port, () => console.log('listining in the port 3001'));

