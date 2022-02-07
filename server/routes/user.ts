import express from 'express';
import User from '../models/user';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  res.send(user);
});

router.post('/check', async (req, res) => {
  try {
    // middleware checks for current user session
    res.send(req.user);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

export default router;
