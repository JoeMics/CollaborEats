import mongoose from 'mongoose';
import { Schema, Types } from 'mongoose';

interface Ingredient {
  ingredient: String;
  amount: Number;
  unitOfMeasure?: String;
}

interface Recipe {
  _id?: String;
  path: Types.Array<String>;
  parent?: String;
  ownerId: String;
  title: String;
  description: String;
  ingredients: Types.Array<Ingredient>;
  instructions: String;
  photo: String;
}

const recipeSchema = new Schema<Recipe>({
  _id: String,
  path: { type: [String], required: true },
  parent: { type: String },
  ownerId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: {
    type: [{ ingredient: String, amount: Number, unitOfMeasure: String }],
    required: true,
  },
  instructions: { type: String, required: true },
  photo: { type: String },
});

export default mongoose.model('Recipe', recipeSchema);
