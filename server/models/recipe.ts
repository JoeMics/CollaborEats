import mongoose from 'mongoose';
import { Schema, Types } from 'mongoose';
import User from './user';

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
  tags: Types.Array<String>;
  photo: String;
}

const recipeSchema = new Schema<Recipe>(
  {
    path: { type: [String], required: true },
    parent: { type: String },
    ownerId: { type: Schema.Types.ObjectId, ref: User, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: {
      type: [{ ingredient: String, amount: String, unitOfMeasure: String }],
      required: true,
    },
    instructions: { type: String, required: true },
    tags: { type: [String] },
    photo: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('Recipe', recipeSchema);
