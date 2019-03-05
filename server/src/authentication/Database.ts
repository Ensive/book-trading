import * as mongoose from 'mongoose';

export default class Database {
  private url: string;

  constructor(url: string = 'mongodb://localhost:32769/book-trading-auth') {
    this.url = url;
  }

  // return a connection
  public connect(cb) {
    mongoose.connect(this.url, { useNewUrlParser: true }, () => {
      console.log('Connected to database');
      cb(mongoose.connection);
    });
  }
}
