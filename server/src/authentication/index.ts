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
  const userApi = createUserApi();
  app.setSessionStore(dbConnection);
  const authenticationService = new AuthenticationService(userApi);
  app.setupAuthentication(authenticationService.passport);

  const server = new Server(express);
  const authController = new AuthController(userApi, authenticationService);
  new Route(express, authController);

  server.run();
}

function createUserApi() {
  return new User();
}
