const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = require('./router/user');
const error = require('./middlewares/error');

const HTTP_OK_STATUS = 200;
const PORT = '3003';

app.use('/user', users);

app.use(error);

app.listen(PORT, () => {
  console.log(`Online: ${PORT}`);
});