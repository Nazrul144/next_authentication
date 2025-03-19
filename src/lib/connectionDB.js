import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectionDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URL;
    console.log("The mongodb uri is:", uri);
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db('nextAuth');
    console.log("Attempting to connect to MongoDB...");
    await db.command({ping: 1})
    console.log("Mongodb connected successfully!");
    return db;
  } catch (error) {
    console.log(error);
  }
};
