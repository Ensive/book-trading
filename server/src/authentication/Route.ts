import { AuthController } from './AuthController';

const routes = {
  signup: '/auth/sign-up',
  login: '/login',
  authrequired: '/authrequired'
};

export default class Route {
  private app;
  private authController: AuthController;

  constructor(app, authController) {
    this.app = app;
    this.authController = authController;
    this.setup();
  }

  private setup() {
    this.app.get('/', (req, res) => {
      console.log('Inside the homepage callback');
      console.log(req.sessionID);
      res.end('You got homepage!');
    });

    this.app.route(routes.signup).post(this.authController.createUser.bind(this.authController));

    this.app.route(routes.login).get((req, res) => {
      res.send(`You got the login page!\n`);
    });

    // TODO: use controller method
    this.app.route(routes.login).post((req, res, next) => {
      this.authController.login(req, res, next);
    });

    this.app.route(routes.authrequired).get((req, res) => {
      console.log('Inside GET /authrequired callback');
      console.log(`User authenticated? ${req.isAuthenticated()}`);
      
      if (req.isAuthenticated()) {
        res.send('you hit the authentication endpoint\n');
      } else {
        res.redirect('/');
      }
    });
  }
}
