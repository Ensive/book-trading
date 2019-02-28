import * as mongoose from 'mongoose';

class Database {
  private url: string;

  constructor(url: string = 'mongodb://localhost:32769/book-trading-auth') {
    this.url = url;
  }

  public connect() {
    mongoose.connect(this.url);
    console.log('Connected to database');
  }
}

export default Database;
