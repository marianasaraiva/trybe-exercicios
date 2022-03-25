const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

const error = require('./middlewares/error');
const ping = require('./routers/ping');
const cep = require('./routers/cep');

app.use('/ping', ping);
app.use('/cep', cep);








app.use(error);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));