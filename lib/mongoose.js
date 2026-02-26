import mongoose from "mongoose";

const connectionToDataBase = async () => {
  try {
    await mongoose.connect(process.env.MongoURL);
    console.log("Connected to db Mongoose");
  } catch (error) {
    console.log(error);
  }
};
export default connectionToDataBase;
