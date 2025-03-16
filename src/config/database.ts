import mongoose from 'mongoose'

const DATABASE_URI = "mongodb+srv://Ram:asdfghkl@vasusharrmaa.4itmd.mongodb.net/courseb";


const connectDb = async (): Promise<void> => {

  try {
    await mongoose.connect(DATABASE_URI);
    console.log("Db connected successfully");
  }
  catch (err) {
    console.error("Error while connecting to db");
    process.exit(1);
  }
}


export { connectDb }
