import * as mongoose from 'mongoose';

let isInitialized = false;

export default class User {
  public model;
  private schema;

  constructor() {
    if (isInitialized) {
      return this;
    }

    this.setup();
  }

  public create(user, cb) {
    const newUser = new this.model(user);
    newUser.save(cb);
  }

  public getById() {}

  public update() {}

  public delete() {}

  private comparePassword() {}

  private gravatar(size: number = 200) {}

  private onSave(next): void {
    next();
  }

  private setup() {
    this.setSchema();
    this.setMethods();
    this.setHooks();
    this.setModel();

    isInitialized = true;
  }

  private setSchema() {
    this.schema = new mongoose.Schema(
      {
        id: String,
        firstName: String,
        lastName: String,
        email: {
          type: String,
          lowercase: true,
          // unique: true,
          // required: [true, `can't be blank`],
          match: [/\S+@\S+\.\S+/, 'is invalid'],
          trim: true
          // index: true
        },
        password: {
          type: String
          // required: true
        }
      },
      {
        timestamps: true
      }
    );
  }

  private setMethods() {
    this.schema.methods.gravatar = this.gravatar;
    this.schema.methods.comparePassword = this.comparePassword;
  }

  private setHooks() {
    this.schema.pre('save', this.onSave);
  }

  private setModel() {
    this.model = mongoose.model('User', this.schema);
  }
}
