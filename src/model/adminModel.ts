import mongoose, { Schema, model, Document } from 'mongoose'

interface adminSch extends Document {
  username: string,
  password: string
}


const amdinSchema = new Schema({
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


export default model<adminSch>("Admins", amdinSchema);
