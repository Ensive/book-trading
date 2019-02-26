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

var express = require( 'express' );
// import * as bodyParser from 'body-parser';
// import * as mongoose from 'mongoose';
// import * as cors from 'cors';

var Server = require( './server' );

// class App {
//   constructor() {
//     this.app = express();
//   }
// }

function init() {
  const app = express();
  const server = new Server(app);
  
  server.run();
}

init();

// export default init;

// export default
