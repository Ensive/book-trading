export default class Server {
  private PORT: number;
  private app;

  constructor(app, PORT = 3001) {
    this.PORT = PORT;
    this.app = app;
  }

  run() {
    const messsage = `Server is listening on port ${this.PORT}`;
    try {
      this.app
        .listen(this.PORT, this.log.bind(null, messsage))
        .once('error', this.onError.bind(this));
    } catch (e) {
      throw new Error(e);
    }
  }

  log(message: string) {
    console.log(message);
  }

  onError(error) {
    if (error.code === 'EADDRINUSE') {
      this.PORT += 1;
      this.run();
    }
  }
}
