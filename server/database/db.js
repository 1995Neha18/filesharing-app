import mongoose from "mongoose";

const DBconnection = async () => {
  const MONGO_URL =
    "mongodb+srv://neha:sahu@cluster0.ipiirqk.mongodb.net/sharingfile?retryWrites=true&w=majority";

  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected with the Database");
  } catch (error) {
    console.log("Error while connecting with database", error.message);
  }
};

export default DBconnection;
