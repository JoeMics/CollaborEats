import express from 'express';
import Comment from '../models/comment'

const router = express.Router();

router.get('/all/:recipeId', async (req,res) => {
  const comments = await Comment.find({recipeId: req.params.recipeId});
  console.log(comments);
  res.send('Route Works');
})

router.post('/create', async (req,res) => {
  const comment = new Comment({
    recipeId: req.body.recipeId,
    ownerId: req.body.ownerId,
    content: req.body.content
  })
  console.log(comment)
  comment.save()
  res.send('Route Works')
})

export default router;