import express from 'express';
import Comment from '../models/comment'

const router = express.Router();

router.get('/', async (req,res) => {
  const comments = await Comment.find( {recipeId: '2a'});
  res.send(comments);
})

router.post('/create', async (req,res) => {
  // const comment = new Comment({
  //   recipeId: req.body.recipeId,
  //   ownerId: req.body.ownerId,
  //   content: req.body.content
  // })
  
  res.send('Test')
})

export default router;