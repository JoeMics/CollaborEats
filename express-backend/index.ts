const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8080;

import express from 'express';
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Welcome to NOT =D');
});

app.listen(PORT, () => console.log(`API server running on port: ${PORT}`));
