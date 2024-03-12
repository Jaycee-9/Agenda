import mongoose from "mongoose";

const connectToDb = async () => {
  mongoose.connect(
    `mongodb+srv://${process.env.atlasUser}:${process.env.atlasPassword}@agenda.lphtdvj.mongodb.net/?retryWrites=true&w=majority&appName=agenda`
  );
  console.log("database connect");
};
export default connectToDb;
