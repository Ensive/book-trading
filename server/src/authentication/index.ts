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

// import * as cors from 'cors';
import App from './App';
import Server from './Server';
import Database from './Database';
import User from './models/User';
import AuthController from './AuthController';
import Route from './Route';

// genid is not called when session with id from clietn exists
// session id can be saved into server's memory, we need to overwrite cookie (sending session id from client)

function init() {
  const app = App();
  const database = new Database();
  database.connect((connection) => {
    app().setSessionStore(app().app, connection);
  });

  const server = new Server(app().app);
  const authController = new AuthController(createUserApi());
  const route = new Route(app().app, authController);

  server.run();
}

init();


// function setupDb() {

// }

function createUserApi() {
  return new User();
}

// function setupMiddlware() {
//   return new MiddlewareSetup(app, dbConnecction);
// }
