import mongoose from 'mongoose';
import { Schema } from 'mongoose';

interface Comment {
  ownerId: Number;
  recipeId: Number;
  content: String;
};

const commentSchema = new Schema<Comment>({
  ownerId: {type: Number, required: true},
  recipeId: { type: Number, required: true},
  content: {type: String, required: true},
});

export default mongoose.model("Comment", commentSchema);
