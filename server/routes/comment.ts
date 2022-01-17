import express from 'express';
import Comment from '../models/comment';

const router = express.Router({ mergeParams: true });

// recipes/:recipeId/comments
router.get('/', async (req, res) => {
  // TS does not know recipeId exists
  // @ts-ignore:next-line
  const { recipeId } = req.params;
  const comments = await Comment.find({ recipeId });
  console.log(comments);
  res.send(comments);
});

router.post('/create', async (req, res) => {
  const comment = new Comment({
    recipeId: req.body.recipeId,
    ownerId: req.body.ownerId,
    content: req.body.content,
  });
  console.log(comment);
  comment.save();
  res.send('Route Works');
});

export default router;
