import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema(
  {
    id: String,
    firstName: String,
    lastName: String,
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, `can't be blank`],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      trim: true
      // index: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
