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
const comment_1 = __importDefault(require("../models/comment"));
const router = express_1.default.Router({ mergeParams: true });
// recipes/:recipeId/comments
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TS does not know recipeId exists
    // @ts-ignore:next-line
    const { recipeId } = req.params;
    const comments = yield comment_1.default.find({ recipeId }).sort({ createdAt: 'desc' }).populate('ownerId');
    res.send(comments);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ownerId, content } = req.body;
        // TS does not know recipeId exists
        // @ts-ignore:next-line
        const { recipeId } = req.params;
        const comment = new comment_1.default({
            recipeId,
            ownerId,
            content,
        });
        yield comment.save();
        const savedComment = yield comment.populate('ownerId');
        res.send(savedComment);
    }
    catch (err) {
        res.status(500).json({ err: err });
    }
}));
exports.default = router;
