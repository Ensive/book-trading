// import * as mongoose from 'mongoose';
// import { UserSchema } from '../models/userModel';
// import { Request, Response } from 'express';

// const User = mongoose.model('User', UserSchema);

// export class AuthController {
//   public createUser(req: Request, res: Response) {
//     const hasRequiredData = req.body.email && req.body.password;
//     if (!hasRequiredData) {
//       res.json({ message: 'Email and password are required' });
//     }

//     const newUser = new User(req.body);
//     newUser.save((err, user) => {
//       if (err) res.send(err);
//       res.json(user);
//     });
//   }
// }

export interface AuthController {
  createUser: Function;
  updateUser: Function;
  deactivateUser: Function;
  deleteUser: Function;
  login: Function;
  logout: Function;
}

export default class {
  private User;
  private authenticationService;

  constructor(User, authenticationService) {
    this.User = User;
    this.authenticationService = authenticationService;
  }

  public createUser(request, response) {
    this.User.create(request.body, (err, user) => {
      if (err) response.send(err);
      response.json(user);
    });
  }

  public updateUser() {}

  public deactivateUser() {}

  public deleteUser() {}

  public login(req, res, next) {
    this.authenticationService.authenticate(req, res, next);
  }

  public logout() {}
}
