import dotenv from 'dotenv';
dotenv.config();

// Constants
const PORT = process.env.PORT || 8080;

// Server
import express from 'express';
import mongoose from 'mongoose';
const morgan = require('morgan');

const app = express();

// Middleware
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  mongoose
    .connect(`${process.env.DB_URI}`)
    .then((response) => {
      res.send('Connected to DB successfully!');
    })
    .catch((err) => res.send(`Could not connect due to ${err}`));
});

app.listen(PORT, () => console.log(`API server running on port: ${PORT}`));
