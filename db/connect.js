import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // mongoose.connect("mongodb://127.0.0.1:27017/si-hd");
    mongoose.connect(
      "mongodb+srv://gobles:gobles@cluster0.deyup3i.mongodb.net/si-hd?retryWrites=true&w=majority"
    );
    console.log("DB connected");
  } catch (error) {
    console.log("Connection failed");
  }
}

export default connectDB