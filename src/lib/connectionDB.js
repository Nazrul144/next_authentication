import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectionDB = async () => {
  if (db) return db;
  try {
    const uri = `${process.env.NEXT_PUBLIC_MONGODB_URL}`;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db('nextAuth');
    return db;
  } catch (error) {
    console.log(error);
  }
};
