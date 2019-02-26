class Server {
  // TODO: config object
  constructor(app, PORT = 3001) {
    this.PORT = PORT;
    this.app = app;
    this.startMessage = `Server listening on port ${PORT}`;
  }

  run() {
    // express API
    this.app.listen(this.PORT, this.log.bind(null, this.startMessage));
  }

  log(message) {
    console.log(message);
  }
}

// export default Server;

module.exports = Server;
