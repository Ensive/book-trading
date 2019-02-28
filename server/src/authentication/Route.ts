const routes = {
  signup: '/auth/sign-up'
};

class Route {
  private app;

  constructor(app) {
    this.app = app;
    this.setup();
  }

  private setup() {
    this.app.route(routes.signup).post();
  }
}
