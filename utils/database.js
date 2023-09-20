import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
  }

  try {
    console.log("=> using new database connection");
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "promptverse",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (err) {
    console.log(err);
  }
};
