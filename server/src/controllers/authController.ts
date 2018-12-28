import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class AuthController {
  public createUser(req: Request, res: Response) {
    const hasRequiredData = req.body.email && req.body.password;
    if (!hasRequiredData) {
      res.json({ message: 'Email and password are required' });
    }

    const newUser = new User(req.body);
    newUser.save((err, user) => {
      if (err) res.send(err);
      res.json(user);
    });
  }
}
