"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const user_1 = __importDefault(require("./models/user"));
const recipe_1 = __importDefault(require("./models/recipe"));
const comment_1 = __importDefault(require("./models/comment"));
const user_2 = __importDefault(require("./routes/user"));
const recipe_2 = __importDefault(require("./routes/recipe"));
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
// Constants
const PORT = process.env.PORT || 8080;
// Server
const app = (0, express_1.default)();
// Middleware
app.use(morgan('tiny'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
// Add origin, and credentials to receive session from client
app.use((0, cors_1.default)({ origin: process.env.WEB_APP_URL, credentials: true }));
// app.use(methodOverride('_method'));
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { httpOnly: true },
}));
// middleware to check current user on every request
// the User data is accessible on every endpoint as "req.user"
app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findOne({ _id: req.session.userId });
    req.user = user;
    next();
}));
//Routes
app.use('/recipes', recipe_2.default);
app.use('/users', user_2.default);
// connect to db
mongoose
    .connect(`${process.env.DB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log('Connected to DB successfully!');
})
    .catch((err) => console.log(`Could not connect due to ${err}`));
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
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
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
        }
        else {
            // @ts-ignore:next-line
            files.map((file) => {
                if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
                    file.isImage = true;
                }
                else {
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
    gfs.files.find().toArray((err, files) => {
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
        }
        else {
            res.status(404).json({
                err: 'Not an image',
            });
        }
    });
});
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.find();
    const comments = yield comment_1.default.find();
    const recipes = yield recipe_1.default.find();
    res.send({ users, comments, recipes });
}));
app.listen(PORT, () => console.log(`API server running on port: ${PORT}`));
