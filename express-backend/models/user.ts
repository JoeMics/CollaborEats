import mongoose from 'mongoose';
import { Schema } from 'mongoose';

interface User {
  _id: string;
  email: string;
  password: string;
  avatar?: string;
};

const userSchema = new Schema<User>({
  _id : String,
  email: { type: String, unique: true, trim: true, required: true },
  password: { type: String, required: true, min: 5 },
  avatar : String
});

export default mongoose.model("User", userSchema);
