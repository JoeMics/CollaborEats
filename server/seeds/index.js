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
const mongoose = require('mongoose');
// models
const user_1 = __importDefault(require("../models/user"));
const recipe_1 = __importDefault(require("../models/recipe"));
const comment_1 = __importDefault(require("../models/comment"));
// seeds
const user_2 = __importDefault(require("./user"));
const recipe_2 = __importDefault(require("./recipe"));
const comment_2 = __importDefault(require("./comment"));
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
const seedDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield user_1.default.deleteMany({});
    yield comment_1.default.deleteMany({});
    yield recipe_1.default.deleteMany({});
    yield user_1.default.insertMany(user_2.default);
    yield recipe_1.default.insertMany(recipe_2.default);
    yield comment_1.default.insertMany(comment_2.default);
});
seedDB().then(() => {
    console.log('db reset succeeded');
    mongoose.connection.close();
});
