import mongoose from "mongoose";

const DBconnection = async () => {
  const MONGO_URI =
    "mongodb+srv://neha:sahu@cluster0.ipiirqk.mongodb.net/sharingfile?retryWrites=true&w=majority";

    try {
     await mongoose.connect(MONGO_URI);
     console.log('Database connected successfully');
 } catch (error) {
     console.log('Error while connecting with the database ', error.message);
 }
}

export default DBconnection;
