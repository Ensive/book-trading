import * as express from 'express';
import * as session from 'express-session';
// var FileStore = require('session-file-store')(session);
import * as ConnectMongo from 'connect-mongo';
const MongoStore = ConnectMongo(session);
import * as uuid from 'uuid';
import * as bodyParser from 'body-parser';

export default function App() {
  const app = express();
  app.use(bodyParser.json());

  return function() {
    return {
      app,
      setSessionStore
    };
  };
}

function setSessionStore(app, connection) {
  app.use(
    session({
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
    })
  );
}
