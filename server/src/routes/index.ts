import { Request, Response } from 'express';
import { BookController } from '../controllers/bookController';
// import { AuthController } from '../controllers/authController';

export class Routes {
  // constructor () {

  // }

  public bookController: BookController = new BookController();
  // public authController: AuthController = new AuthController();
  public routes(app): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successful!'
      });
    });

    // books
    app.route('/books').get(this.bookController.getBooks);
    app.route('/books/:bookId').get(this.bookController.getBookWithID);
    app.route('/books').post(this.bookController.addNewBook);
    app.route('/books/:bookId').delete(this.bookController.deleteBook);

    // auth
    // app.route('/auth/sign-up').post(this.authController.createUser);
  }
}
