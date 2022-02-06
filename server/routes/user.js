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
const user_1 = __importDefault(require("../models/user"));
const google_auth_library_1 = require("google-auth-library");
const router = express_1.default.Router();
const client = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findOne({ _id: req.params.id });
    res.send(user);
}));
// Authentication using google
router.post('/auth/google', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.body;
    try {
        const ticket = yield client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const { email, name, picture } = ticket.getPayload();
        // finds a user by email, and updates name and picture,
        // if not found "upsert" will create the user
        const user = yield user_1.default.findOneAndUpdate({ email }, { name, picture }, { upsert: true, new: true });
        req.session.userId = user._id;
        res.status(201);
        res.send(user);
    }
    catch (e) {
        res.status(500);
        res.send(e);
    }
}));
router.post('/auth/logout', (req, res) => {
    req.session.destroy((err) => res.send(err));
    res.status(200).send('Logged out');
});
router.post('/check', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // middleware checks for current user session
    res.send(req.user);
}));
exports.default = router;
