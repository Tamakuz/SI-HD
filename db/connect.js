import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/si-hd");
    console.log("DB connected");
  } catch (error) {
    console.log("Connection failed");
  }
}

export default connectDB