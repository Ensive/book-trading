import * as passport from 'passport';
import * as passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;

export default class AuthenticationService {
  private User;
  public passport;

  constructor(User) {
    this.User = User;
    this.passport = passport;
    this.setup();
  }

  setup() {
    this.setupLocalStrategy();
    this.setupUserSerializer();
    this.setupUserDeserializer();
  }

  setupLocalStrategy() {
    const strategy = new LocalStrategy(
      {
        usernameField: 'email'
      },
      this.matchUser
    );

    this.passport.use(strategy);
  }

  matchUser(email, password, done) {
    // fetch user by email from database
    // if (email === user.email && password === user.password) {
    if (true) {
      done(null, { id: '2f24vvg', email, password });
    }
  }

  setupUserSerializer() {
    this.passport.serializeUser((user, done) => {
      done(null, user.id);
    });
  }

  setupUserDeserializer() {
    passport.deserializeUser((id, done) => {
      console.log('Inside deserializeUser callback');
      console.log(`The user id passport saved in the session file store is: ${id}`);
      // const user = users[0].id === id ? users[0] : false;
      // TODO: hardcoded
      const user = { id: '2f24vvg', email: 'test@test.com', password: 'password' };
      done(null, user);
    });
  }

  authenticate(req, res, next, strategy = 'local') {
    this.passport.authenticate(strategy, (err, user, info) => {
      req.login(user, err => this.handleLogin.call(this, err, req, res));
    })(req, res, next);
  }

  handleAuthenticate() {}

  handleLogin(err, req, res) {
    return res.send('You were authenticated & logged in!\n');
  }
}
