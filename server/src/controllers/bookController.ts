import * as mongoose from 'mongoose';
import { BookSchema } from '../models/bookModel';
import { Request, Response } from 'express';

const Book = mongoose.model('Book', BookSchema);

export class BookController {
  public addNewBook(req: Request, res: Response) {
    let newBook = new Book(req.body);

    newBook.save((err, book) => {
      if (err) res.send(err);
      res.json(book);
    });
  }

  public getBooks(req: Request, res: Response) {
    Book.find({}).sort({ published: -1 }).exec((err, book) => {
      if (err) res.send(err);
      res.json(book);
    });
  }

  public getBookWithID(req: Request, res: Response) {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) res.send(err);
      console.log('book', book);
      res.json(book);
    });
  }

  public deleteBook(req: Request, res: Response) {
    Book.remove({ _id: req.params.bookId }, err => {
      if (err) res.send(err);
      res.json({ message: 'Successfully deleted book' });
    });
  }
}
