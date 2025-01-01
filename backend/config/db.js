import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongo_url);
    console.log(`mongodb connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`error:${error.message}`);
    process.exit(1);
  }
};
