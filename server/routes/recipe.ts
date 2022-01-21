import express from 'express';
import Recipe from '../models/recipe';
import versionsRoute from './version';
import commentsRoute from './comment';
const router = express.Router();

router.use('/:recipeId/versions/', versionsRoute);
router.use('/:recipeId/comments/', commentsRoute);

router.get('/', async (req, res) => {
  const recipes = await Recipe.find({ parent: null });
  res.send(recipes);
});

router.get('/:id', async (req, res) => {
  const recipe = await Recipe.findOne({ _id: req.params.id });
  const recipeTree = await Recipe.find({ path: req.params.id });
  res.send({ recipe, recipeTree });
});

router.get('/user/:ownerId', async (req, res) => {
  const recipes = await Recipe.find({ ownerId: req.params.ownerId });
  res.send(recipes);
});

router.post('/', async (req, res) => {
  const { ownerId, title, description, ingredients, instructions } = req.body;
  const recipe = new Recipe({
    path: [],
    parent: null,
    ownerId,
    title,
    description,
    ingredients,
    instructions,
  });
  recipe.save();
  res.send(recipe);
});

export default router;
