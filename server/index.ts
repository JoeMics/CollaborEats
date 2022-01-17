import dotenv from 'dotenv';
dotenv.config();

// Constants
const PORT = process.env.PORT || 8080;

// Server
import express from 'express';
const mongoose = require('mongoose');
const morgan = require('morgan');

//Routes
import userRoutes from './routes/user';
import commentRoutes from './routes/comment';
import recipeRoutes from './routes/recipe';

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use('/recipe', recipeRoutes);
app.use('/user', userRoutes);
app.use('/comment', commentRoutes);

import User from './models/user';
import Recipe from './models/recipe';
import Comment from './models/comment';

// Middleware
app.use(morgan('tiny'));

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

// Get all users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Add a user
app.get('/add-user', async (req, res) => {
  await User.deleteMany({});

  const newUser = await User.create({
    _id: '2a',
    email: 'JoeBics@example.com',
    password: 'password',
    avatar: 'https://avatars.githubusercontent.com/u/46177831?v=4',
  });

  res.send(newUser);
});

app.listen(PORT, () => console.log(`API server running on port: ${PORT}`));
