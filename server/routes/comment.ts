import express from 'express';
import Comment from '../models/comment';

const router = express.Router({ mergeParams: true });

// recipes/:recipeId/comments
router.get('/', async (req, res) => {
  // TS does not know recipeId exists
  // @ts-ignore:next-line
  const { recipeId } = req.params;
  const comments = await Comment.find({ recipeId });
  res.send(comments);
});

router.post('/', async (req, res) => {
  const { recipeId, ownerId, content } = req.body;

  const comment = new Comment({
    recipeId,
    ownerId,
    content,
  });
  comment.save();
  res.send(comment);
});

export default router;
