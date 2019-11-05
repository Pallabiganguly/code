const express = require('express');
const app = express();
const port = 3001;
const router = require('./api/router/test');
const peopleRouter = require('./api/router/peoples');

const bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=> res.send('hello test'));
app.use('/test', router);
app.use('/people', peopleRouter);

app.listen(port, () => console.log('listining in the port 3001'));

