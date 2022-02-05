import express from 'express';
import User from '../models/user';
import { OAuth2Client } from 'google-auth-library';

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.get('/:id', async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  res.send(user);
});

// Authentication using google
router.post('/auth/google', async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, name, picture } = ticket.getPayload()!;

    // finds a user by email, and updates name and picture,
    // if not found "upsert" will create the user
    const user = await User.findOneAndUpdate(
      { email },
      { name, picture },
      { upsert: true, new: true }
    );

    req.session.userId = user._id;

    res.status(201);
    res.send(user);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

router.post('/check', async (req, res) => {
  // middleware checks for current user session
  res.send(req.user);
});
export default router;
