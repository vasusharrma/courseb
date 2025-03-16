import mongoose, { Schema, model, Document } from 'mongoose'

interface userSch extends Document {
  username: string,
  password: string
}


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});


export default model<userSch>("Users", userSchema);
