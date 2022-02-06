import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import session from 'express-session';

import User from './models/user';
import Recipe from './models/recipe';
import Comment from './models/comment';
import userRoutes from './routes/user';
import recipeRoutes from './routes/recipe';

const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const MongoDBStore = require('connect-mongodb-session')(session);
// const methodOverride = require('method-override');

import { Request, Response } from 'express';

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

// Add origin, and credentials to receive session from client
app.use(cors({ origin: process.env.WEB_APP_URL, credentials: true }));
// app.use(methodOverride('_method'));
const store = new MongoDBStore({ uri: process.env.DB_URI, collection: 'mySessions' });
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    saveUninitialized: true,
    resave: false,
    store,
  })
);

// Use declaration merging to add user and userId
declare module 'express-serve-static-core' {
  interface Request {
    user: any;
  }
}

declare module 'express-session' {
  interface SessionData {
    userId: string;
  }
}

// middleware to check current user on every request
// the User data is accessible on every endpoint as "req.user"
app.use(async (req, res, next) => {
  const user = await User.findOne({ _id: req.session.userId });
  req.user = user;
  next();
});

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

// Initalize gfs
// @ts-ignore:next-line
let gfs;

const conn = mongoose.connection;

conn.once('open', () => {
  // This initializes the stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('images');
});

// This is the storage engine
const storage = new GridFsStorage({
  url: process.env.DB_URI,
  file: (req: any, file: any) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err: any, buf: any) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'images',
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

app.get('/upload', (req, res) => {
  // @ts-ignore:next-line
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      res.send({ files: false });
    } else {
      // @ts-ignore:next-line
      files.map((file) => {
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
          file.isImage = true;
        } else {
          file.isImage = false;
        }
      });
      res.send({ files: files });
    }
  });
});
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.json({ file: req.file });
});

app.get('/files', (req, res) => {
  // @ts-ignore:next-line
  gfs.files.find().toArray((err: any, files: any) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist',
      });
    }
    return res.json(files);
  });
});

app.get('/files/:filename', (req, res) => {
  // @ts-ignore:next-line
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists',
      });
    }
    return res.json(file);
  });
});

// @route GET /image/:filename
// @desc Display Image
app.get('/image/:filename', (req, res) => {
  // @ts-ignore:next-line
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists',
      });
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      const bucket = new mongoose.mongo.GridFSBucket(conn, { bucketName: 'images' });
      let readStream = bucket.openDownloadStream(file._id);
      readStream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image',
      });
    }
  });
});

app.get('/', async (req, res) => {
  const users = await User.find();
  const comments = await Comment.find();
  const recipes = await Recipe.find();
  res.send({ users, comments, recipes });
});

app.listen(PORT, () => console.log(`API server running on port: ${PORT}`));
