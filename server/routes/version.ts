import express, { Request } from 'express';
import Recipe from '../models/recipe';
const router = express.Router({ mergeParams: true });

router.post('/', async (req: Request, res) => {
  try {
    const { ownerId, title, description, ingredients, instructions, photo } = req.body;
    const { recipeId } = req.params;

    const parentRecipe = await Recipe.findOne({ _id: recipeId });

    const recipe = new Recipe({
      path: [...parentRecipe!.path, recipeId],
      parent: recipeId,
      ownerId,
      title,
      description,
      ingredients: ingredients,
      instructions,
      photo,
    });
    await recipe.save();
    res.send(recipe);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

router.get('/:versionId', async (req, res) => {
  const { versionId } = req.params;
  const recipe = await Recipe.findOne({ _id: versionId }).populate('ownerId', 'name');
  res.send(recipe);
});

export default router;
