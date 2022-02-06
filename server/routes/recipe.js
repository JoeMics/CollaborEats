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
const version_1 = __importDefault(require("./version"));
const comment_1 = __importDefault(require("./comment"));
const router = express_1.default.Router();
router.use('/:recipeId/versions/', version_1.default);
router.use('/:recipeId/comments/', comment_1.default);
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield recipe_1.default.find({ parent: null }).populate('ownerId', 'name');
        if (!recipes) {
            throw new Error('Recipe not found');
        }
        res.send(recipes);
    }
    catch (err) {
        return res.send(err);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield recipe_1.default.findOne({ _id: req.params.id }).populate('ownerId', 'name');
        const recipeTree = yield recipe_1.default.find({ path: req.params.id }).populate('ownerId', 'name');
        if (!recipe) {
            throw new Error('Recipe not found');
        }
        res.send({ recipe, recipeTree });
    }
    catch (err) {
        return res.send(err);
    }
}));
router.get('/user/:ownerId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield recipe_1.default.find({ ownerId: req.params.ownerId }).populate('ownerId', 'name');
        if (!recipes) {
            throw new Error('Recipes not found');
        }
        res.send(recipes);
    }
    catch (err) {
        return res.send(err);
    }
}));
router.get('/:id/recent', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield recipe_1.default.findOne({ _id: req.params.id });
        const recipeTree = yield recipe_1.default.find({ path: req.params.id }).sort({ createdAt: 'desc' });
        if (!recipe && !recipeTree) {
            throw new Error('Recipes not found');
        }
        if (recipeTree.length > 0) {
            res.send(recipeTree[0]);
        }
        else {
            res.send(recipe);
        }
    }
    catch (err) {
        return res.send(err);
    }
}));
router.get('/:id/mostForked', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield recipe_1.default.findOne({ _id: req.params.id });
        const recipeTree = yield recipe_1.default.find({ path: req.params.id });
        if (!recipe || !recipeTree) {
            throw new Error('Recipe not found');
        }
        if (recipeTree.length > 0) {
            res.send(recipeTree);
        }
        else {
            res.send(recipe);
        }
    }
    catch (err) {
        return res.send(err);
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ownerId, title, description, ingredients, instructions, photo } = req.body;
        const recipe = new recipe_1.default({
            path: [],
            parent: null,
            ownerId,
            title,
            description,
            ingredients,
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
exports.default = router;
router.post('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield recipe_1.default.find({
            $or: [
                { $and: [{ title: { $regex: req.body.searchPhrase, $options: 'i' } }, { parent: null }] },
                { $and: [{ 'ingredients.ingredient': req.body.searchPhrase }] },
            ],
        }).populate('ownerId');
        if (!recipes) {
            throw new Error('No recipes found');
        }
        res.send(recipes);
    }
    catch (err) {
        res.status(500).json({ err: err });
    }
}));
