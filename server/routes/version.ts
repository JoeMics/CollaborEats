import express from 'express';
import Recipe from '../models/recipe';
const router = express.Router({ mergeParams: true });

router.post('/', async (req, res) => {
  const { ownerId, title, description, ingredients, instructions } = req.body;
  // TS does not know recipeId exists
  // @ts-ignore:next-line
  const { recipeId } = req.params;

  // TODO: OwnerId needs to be retrieved from cookies
  const parentRecipe = await Recipe.findOne({ _id: recipeId });
  const recipe = new Recipe({
    path: [...parentRecipe!.path, recipeId],
    parent: recipeId,
    ownerId,
    title,
    description,
    ingredients: JSON.parse(ingredients),
    instructions,
  });
  recipe.save();
  res.send(recipe);
});

router.get('/:versionId', async (req, res) => {
  const { versionId } = req.params;
  const recipe = await Recipe.findOne({ _id: versionId });
  res.send(recipe);
});

export default router;
