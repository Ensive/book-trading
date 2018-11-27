import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
  id: String,
  title: {
    type: String,
    required: 'Enter book title'
  },
  subtitle: String,
  description: String,
  author: String,
  // author: {
  //   type: String,
  //   required: 'Enter author'
  // },
  published: {
    type: Date,
    default: Date.now
  },
  publisher: String,
  pages: Number,
  website: String
});
