import express from 'express';
import Recipe from '../models/recipe';
const versionsRoutes = express.Router({ mergeParams: true });

versionsRoutes.get('/:versionId', async (req, res) => {
  const { versionId } = req.params;
  const recipe = await Recipe.findOne({ _id: versionId });
  res.send(recipe);
});

versionsRoutes.post('/:versionId', async (req, res) => {
  // TS does not know recipeId exists
  // @ts-ignore:next-line
  const { ownerId, title, description, ingredients, instructions, recipeId } = req.body;
  const parentRecipe = await Recipe.findOne({ _id: recipeId });
  const recipe = new Recipe({
    path: [...parentRecipe!.path, recipeId],
    parent: recipeId,
    ownerId,
    title,
    description,
    ingredients,
    instructions,
  });

  recipe.save();
  res.send(recipe);
});

export default versionsRoutes;
