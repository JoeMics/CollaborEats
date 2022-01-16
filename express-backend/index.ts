import dotenv from 'dotenv';
dotenv.config();

// Constants
const PORT = process.env.PORT || 8080;

// Server
import express from 'express';
import mongoose from 'mongoose';
const morgan = require('morgan');

const app = express();

import User from "./models/user";

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

// Get all users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Add a user
app.get("/add-user", async (req, res) => {
  const newUser = await User.create({
    _id: '2a',
    email: 'JoeBics@example.com',
    password: 'password',
    avatar: 'https://avatars.githubusercontent.com/u/46177831?v=4'
  })

  res.send(newUser);
});

app.listen(PORT, () => console.log(`API server running on port: ${PORT}`));
