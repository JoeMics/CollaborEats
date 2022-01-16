import dotenv from 'dotenv';
dotenv.config();

const mongoose = require('mongoose');

// models
import User from '../models/user';
import Recipe from '../models/recipe';
import Comment from '../models/comment';
// seeds
import users from './user';
import recipes from './recipe';
import comments from './comment';

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

const seedDB = async () => {
  await User.deleteMany({});
  await Comment.deleteMany({});
  await Recipe.deleteMany({});

  await User.insertMany(users);
  await Recipe.insertMany(recipes);
  await Comment.insertMany(comments);
};

seedDB().then(() => {
  console.log('db reset succeeded');
  mongoose.connection.close();
});
