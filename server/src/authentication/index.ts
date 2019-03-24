import App from './App';
import Server from './Server';
import Database from './Database';
import User from './models/User';
import AuthController from './AuthController';
import Route from './Route';
import AuthenticationService from './AuthenticationService';

init();

function init() {
  const app = new App();
  const express = app.express;
  const database = new Database();

  database.connect(dbConnection => onDatabaseConnect({ dbConnection, app, express }));
}

function onDatabaseConnect({ dbConnection, app, express }) {
  app.setSessionStore(dbConnection);

  const userApi = createUserApi();
  const authenticationService = new AuthenticationService(userApi);
  app.setupAuthentication(authenticationService.passport);

  const authController = new AuthController(userApi, authenticationService);
  initRouting(express, authController);

  const server = new Server(express);
  server.run();
}

function createUserApi() {
  return new User();
}

function initRouting(express, authController) {
  new Route(express, authController);
}
