import mongoose, { Document, Schema } from 'mongoose'


interface courseSch extends Document {
  title: string,
  description: string,
  price: number,
  imageLink: string
}


const courseSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    maxLength: 25
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 199
  },
  imageLink: {
    type: String,
    required: true,

  }
})


export default mongoose.model<courseSch>("Courses", courseSchema);
