const dotenv = require('dotenv');
dotenv.config();

PORT = process.env.PORT || 8080;

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Welcome to CollaborEats =D');
});

app.listen(PORT, () => console.log(`API server running on port: ${PORT}`));
