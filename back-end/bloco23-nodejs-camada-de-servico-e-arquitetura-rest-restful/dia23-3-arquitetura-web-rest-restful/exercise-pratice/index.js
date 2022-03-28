const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const error = require('./middleware/error.js');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', require('./controllers/productController'));

app.use(error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});