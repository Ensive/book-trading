// import * as express from 'express';
// import * as express from 'express';

class Server {
  private PORT: number;
  private app;
  private startMessage: string;

  constructor(app, PORT = 3001) {
    this.PORT = PORT;
    this.app = app;
    this.startMessage = `Server is listening on port ${PORT}`;
  }

  run() {
    // express API
    return new Promise((resolve, reject) => {
      try {
        this.app.listen(this.PORT, this.log.bind(null, this.startMessage));
        resolve({ message: 'Server is successfully running'});
      } catch (e) {
        reject(e);
      }
    });
  }

  log(message: string) {
    console.log(message);
  }
}

export default Server;
