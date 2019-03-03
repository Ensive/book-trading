import { AuthController } from './AuthController';

const routes = {
  signup: '/auth/sign-up'
};

export default class Route {
  private app;
  private authController;

  constructor(app, authController) {
    this.app = app;
    this.authController = authController;
    this.setup();
  }

  private setup() {
    this.app
      .route(routes.signup)
      .post(this.authController.createUser.bind(this.authController));
  }
}
