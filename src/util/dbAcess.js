import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const url =
    "mongodb+srv://igordbauer:bnkNW4Bku4BJ7C6R@cluster0.mkk7l8p.mongodb.net/nextapi?retryWrites=true&w=majority";
  const client = await MongoClient.connect(
    url
    // "mongodb://0.0.0.0:27017/nextapi"
  );
  return client;
};
