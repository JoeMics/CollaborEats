import mongoose from 'mongoose';
import { Schema } from 'mongoose';

interface User {
  _id?: string;
  email: string;
  name: string;
  picture: string;
}

const userSchema = new Schema<User>({
  email: { type: String, unique: true, trim: true, required: true },
  name: String,
  picture: String,
});

export default mongoose.model('User', userSchema);
