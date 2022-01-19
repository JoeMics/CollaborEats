import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import User from './models/user';
import Recipe from './models/recipe';
import Comment from './models/comment';
import userRoutes from './routes/user';
import recipeRoutes from './routes/recipe';

const mongoose = require('mongoose');
const morgan = require('morgan');
// const cookieParser = require('cookieParser');

// Constants
const PORT = process.env.PORT || 8080;

// Server
const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// app.use(cookieParser);
app.use(cors());

//Routes
app.use('/recipes', recipeRoutes);
app.use('/users', userRoutes);

// connect to db
mongoose
  .connect(`${process.env.DB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB successfully!');
  })
  .catch((err: any) => console.log(`Could not connect due to ${err}`));

app.get('/', async (req, res) => {
  const users = await User.find();
  const comments = await Comment.find();
  const recipes = await Recipe.find();
  res.send({ users, comments, recipes });
});

app.listen(PORT, () => console.log(`API server running on port: ${PORT}`));
