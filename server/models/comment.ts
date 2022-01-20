import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import User from './user';

interface Comment {
  _id?: String;
  ownerId: String;
  recipeId: String;
  content: String;
}

const commentSchema = new Schema<Comment>(
  {
    ownerId: { type: Schema.Types.ObjectId, ref: User, required: true },
    recipeId: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Comment', commentSchema);
