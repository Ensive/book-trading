import * as express from 'express';
import * as expressSession from 'express-session';
// var FileStore = require('session-file-store')(session);
import * as ConnectMongo from 'connect-mongo';
const MongoStore = ConnectMongo(expressSession);
import * as uuid from 'uuid';
import * as bodyParser from 'body-parser';

let isInitialized = false;

export default class App {
  public express;

  constructor() {
    if (isInitialized) {
      return this.express;
    }

    this.express = express();
    this.express.use(bodyParser.json());

    isInitialized = true;
  }

  public setSessionStore(connection) {
    const session = expressSession({
      genid: () => uuid(),
      store: new MongoStore({
        mongooseConnection: connection
      }),
      // TODO: in production should be pullsed from an ENV var
      secret: 'auth-service',
      resave: false,
      cookie: {
        maxAge: 600000
      },
      saveUninitialized: true
    });

    this.express.use(session);
  }

  public setupAuthentication(passport) {
    this.express.use(passport.initialize());
    this.express.use(passport.session());
  }
}
