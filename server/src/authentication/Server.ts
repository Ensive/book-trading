export default class Server {
  private PORT: number;
  private app;
  private startMessage: string;

  constructor(app, PORT = 3001) {
    this.PORT = PORT;
    this.app = app;
    this.startMessage = `Server is listening on port ${PORT}`;
  }

  async run() {
    try {
      this.app.listen(this.PORT, this.log.bind(null, this.startMessage));
      return({ message: 'Server is successfully running'});
    } catch (e) {
      throw new Error(e);
    }
  }

  log(message: string) {
    console.log(message);
  }
}
