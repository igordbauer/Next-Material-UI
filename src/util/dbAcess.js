import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_CREDENTIALS}@cluster0.mkk7l8p.mongodb.net/nextapi?retryWrites=true&w=majority`
    // "mongodb://0.0.0.0:27017/nextapi"
  );
  return client;
};
