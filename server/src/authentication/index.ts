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
  const app = new App();
  const express = app.express;
  const database = new Database();
  database.connect(connection => {
    app.setSessionStore(connection);
  });

  const server = new Server(express);
  const authController = new AuthController(createUserApi());
  const route = new Route(express, authController);

  server.run();
}

init();

function createUserApi() {
  return new User();
}

// authentication service methods
// return instanse of passport from authentication service
// we should have access to the user model inside authentication service LocalStrategy setup method
// setAuthentication in App.ts
// Step 3) Add and configure Passport.js
// https://medium.com/@evangow/server-authentication-basics-express-sessions-passport-and-curl-359b7456003d
