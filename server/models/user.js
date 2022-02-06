"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const userSchema = new mongoose_2.Schema({
    _id: String,
    email: { type: String, unique: true, trim: true, required: true },
    name: String,
    picture: String,
});
exports.default = mongoose_1.default.model('User', userSchema);
