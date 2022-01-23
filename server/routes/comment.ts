import express from 'express';
import Comment from '../models/comment';

const router = express.Router({ mergeParams: true });

// recipes/:recipeId/comments
router.get('/', async (req, res) => {
  // TS does not know recipeId exists
  // @ts-ignore:next-line
  const { recipeId } = req.params;
  const comments = await Comment.find({ recipeId }).sort({ createdAt: 'desc' }).populate('ownerId');
  res.send(comments);
});

router.post('/', async (req, res) => {
  try {
    const { ownerId, content } = req.body;
    // TS does not know recipeId exists
    // @ts-ignore:next-line
    const { recipeId } = req.params;

    const comment = new Comment({
      recipeId,
      ownerId,
      content,
    });
    await comment.save();

    const savedComment = await comment.populate('ownerId');
    res.send(savedComment);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

export default router;
