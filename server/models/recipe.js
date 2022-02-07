"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const user_1 = __importDefault(require("./user"));
const recipeSchema = new mongoose_2.Schema({
    path: { type: [String], required: true },
    parent: { type: String },
    ownerId: { type: mongoose_2.Schema.Types.ObjectId, ref: user_1.default, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: {
        type: [{ ingredient: String, amount: String, unitOfMeasure: String }],
        required: true,
    },
    instructions: { type: String, required: true },
    photo: { type: String },
}, { timestamps: true });
exports.default = mongoose_1.default.model('Recipe', recipeSchema);
