import { Request, Response } from 'express';
import { BookController } from '../controllers/bookController';

const books = [
  {
    id: '9781491950296',
    title: 'Programming  JavaScript',
    subtitle:
      'Robust Web Architecture with Node, HTML5, and Modern JS Libraries',
    author: 'Eric Elliott',
    published: '2014-07-01T00:00:00.000Z',
    publisher: "O'Reilly Media",
    pages: 254,
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
    website: 'http://chimera.labs.oreilly.com/books/1234000000262/index.html'
  }
];

export class Routes {
  public bookController: BookController = new BookController();
  public routes(app): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successful!'
      });
    });

    app.route('/books').get(this.bookController.getBooks);
    app.route('/books/:bookId').get(this.bookController.getBookWithID);
    app.route('/books').post(this.bookController.addNewBook)
  }
}
