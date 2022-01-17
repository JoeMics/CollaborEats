import mongoose from 'mongoose';
import { Schema } from 'mongoose';

interface Comment {
  _id?: String;
  ownerId: String;
  recipeId: String;
  content: String;
}

const commentSchema = new Schema<Comment>({
  _id: String,
  ownerId: { type: String, required: true },
  recipeId: { type: String, required: true },
  content: { type: String, required: true },
});

export default mongoose.model('Comment', commentSchema);
