"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const user_1 = __importDefault(require("./user"));
const commentSchema = new mongoose_2.Schema({
    ownerId: { type: mongoose_2.Schema.Types.ObjectId, ref: user_1.default, required: true },
    recipeId: { type: String, required: true },
    content: { type: String, required: true },
}, { timestamps: true });
exports.default = mongoose_1.default.model('Comment', commentSchema);
