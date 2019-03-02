// 1. move to auth DONE
// 2. initialize a separate app with a route
// 3. has a seprate connectiom to mongo
// 4. creating a user record to a new database

// Authentication Microservice Module/App/Package/Component

// Architecture (high level)
// Goal: each service knows as less as possible about each other
// Goal: all components should be reusable (e.g. we easily can replace mongodb instance with postgres instance)
// Goal:

// Entry Point (index.js) - initialization of all sub-services (low-level design)
// - database communication interface (module)
// - Route module
// - authentication public API (login, register, getJWTtoken) passport.js
// - model ???
// - server

import * as express from 'express';
// import * as bodyParser from 'body-parser';
// import * as cors from 'cors';

import Server from './Server';
import Database from './Database';

// class App {
//   constructor() {
//     this.app = express();
//   }
// }

type ServerResponse = {
  message: string
}

function init() {
  const app = express();
  const server = new Server(app);
  const database = new Database();

  server.run().then((res: ServerResponse) => {
    console.log(res.message);
    database.connect();
  });
}

init();