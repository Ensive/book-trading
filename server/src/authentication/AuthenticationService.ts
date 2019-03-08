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
    // this.setupUserDeserializer();
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
    console.log('Inside local strategy callback');

    // fetch user by email from database
    // if (email === user.email && password === user.password) {
    if (true) {
      done(null, { id: '2f24vvg', email, password });
    }
  }

  setupUserSerializer() {
    this.passport.serializeUser((user, done) => {
      console.log('Inside serializeUser callback. User id is save to the session file store here');
      console.log('user.id', user.id)
      done(null, user.id);
    });
  }

  authenticate(req, res, next, strategy = 'local') {
    this.passport.authenticate(strategy, (err, user, info) => {
      console.log('Inside passport.authenticate() callback');
      console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
      console.log(`req.user: ${JSON.stringify(req.user)}`);
      console.log('====================================');
      console.log('VOT ON', user);
      console.log('====================================');
      req.login(user, err => this.handleLogin.call(this, err, req, res));
    })(req, res, next);
  }

  handleAuthenticate() {

  }

  handleLogin(err, req, res) {
    console.log('====================================');
    console.log(arguments.length);
    console.log('====================================');
    console.log('Inside req.login() callback');
    console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
    console.log(`req.user: ${JSON.stringify(req.user)}`);
    return res.send('You were authenticated & logged in!\n');
  }
}
