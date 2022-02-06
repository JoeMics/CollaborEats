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
const express_1 = __importDefault(require("express"));
const recipe_1 = __importDefault(require("../models/recipe"));
const router = express_1.default.Router({ mergeParams: true });
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ownerId, title, description, ingredients, instructions, photo } = req.body;
        console.log(title);
        // TS does not know recipeId exists
        // @ts-ignore:next-line
        const { recipeId } = req.params;
        // TODO: OwnerId needs to be retrieved from cookies
        const parentRecipe = yield recipe_1.default.findOne({ _id: recipeId });
        const recipe = new recipe_1.default({
            path: [...parentRecipe.path, recipeId],
            parent: recipeId,
            ownerId,
            title,
            description,
            ingredients: ingredients,
            instructions,
            photo,
        });
        yield recipe.save();
        res.send(recipe);
    }
    catch (err) {
        res.status(500).json({ err: err });
    }
}));
router.get('/:versionId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { versionId } = req.params;
    const recipe = yield recipe_1.default.findOne({ _id: versionId }).populate('ownerId', 'email');
    res.send(recipe);
}));
exports.default = router;
