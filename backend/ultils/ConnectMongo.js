import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Database connected Sucessfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
