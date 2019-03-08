import { AuthController } from './AuthController';

const routes = {
  signup: '/auth/sign-up',
  login: '/login'
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
    this.app.get('/', (req, res) => {});

    this.app
      .route(routes.signup)
      .post(this.authController.createUser.bind(this.authController));

    this.app.route(routes.login).get((req, res) => {
      console.log('Inside GET /login callback function');
      console.log(req.sessionID);
      res.send(`You got the login page!\n`);
    });

    // TODO: use controller method
    this.app.route(routes.login).post((req, res, next) => {
      console.log('Inside POST /login callback function');
      this.authController.login(req, res, next);
      // console.log(req.body);
      // res.send(`You posted to the login page!\n`);
    });
  }
}


