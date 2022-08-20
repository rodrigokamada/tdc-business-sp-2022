import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const booksSchema: Schema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      /* eslint-disable no-underscore-dangle */
      const book = { id: ret._id, ...ret };
      delete book._id;
      delete book.__v;
      return book;
    },
  },
});

const BooksModel = model('Books', booksSchema);

export default BooksModel;
