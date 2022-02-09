import dotenv from 'dotenv';
dotenv.config();

// Use declaration merging to add user and userId
declare module 'express-serve-static-core' {
  interface Request {
    user: any;
  }
}

// Constants
const PORT = process.env.PORT || 8080;

import express from 'express';
import cors from 'cors';
import { getAuth } from 'firebase-admin/auth';

import User from './models/user';
import userRoutes from './routes/user';
import recipeRoutes from './routes/recipe';
import imageRoutes from './routes/image';

// connect to DB
import './lib/mongoose';

// initialize firebase SDK
import './services/firebase';

const morgan = require('morgan');

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

// Add origin, and credentials to receive session from client
app.use(
  cors({
    // uncomment to work in dev environment
    origin: 'http://localhost:3000',
    // origin: 'https://vibrant-cray-95d891.netlify.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Reqested-With', 'Accept'],
    preflightContinue: true,
  })
);

// middleware to check current user on every request
// update Users collection on every request
// the User data is accessible on every endpoint as "req.user"
app.use(async (req, res, next) => {
  // Check for access token in header
  // Token must be of authorization type, and must include "Bearer"
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    const idToken = req.headers.authorization?.split(' ')[1];

    if (idToken) {
      // Verify token
      const decodedToken = await getAuth().verifyIdToken(idToken);
      const { uid } = decodedToken;

      // Get user info from firebase
      const userRecord = await getAuth().getUser(uid);
      const { email, displayName, photoURL } = userRecord;

      // User info to query for and update user info
      // This allows us to always have the most updated version of the user
      const user = await User.findOneAndUpdate(
        { email },
        { name: displayName, picture: photoURL },
        { upsert: true, new: true }
      );

      // allows all routes to access the user on every request
      req.user = user;
      return next();
    }
  }
  next();
});

//Routes
app.use('/recipes', recipeRoutes);
app.use('/users', userRoutes);
app.use('/images', imageRoutes);

app.listen(PORT, () => console.log(`API server running on port: ${PORT}`));
