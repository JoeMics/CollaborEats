import dotenv from 'dotenv';
dotenv.config();

// Use declaration merging to add user and userId
declare module 'express-serve-static-core' {
  interface Request {
    user: any;
  }

  interface ParamsDictionary {
    recipeId: string;
  }
}

// Constants
const { WEB_APP_URL, PORT } = process.env;

import express from 'express';
import cors from 'cors';
const morgan = require('morgan');

import userRoutes from './routes/user';
import recipeRoutes from './routes/recipe';
import imageRoutes from './routes/image';
import verifyAndUpdateUser from './lib/firebase-auth-middleware';

// connect to DB
import './lib/mongoose';

// initialize firebase SDK
import './services/firebase';

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
    origin: WEB_APP_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Reqested-With', 'Accept'],
    preflightContinue: true,
  })
);

app.use(verifyAndUpdateUser);

//Routes
app.use('/recipes', recipeRoutes);
app.use('/users', userRoutes);
app.use('/images', imageRoutes);

app.listen(PORT || 8080, () => console.log(`API server running on port: ${PORT}`));
