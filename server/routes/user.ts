import express from 'express';
import User from '../models/user';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  res.send(user);
});
export default router;
