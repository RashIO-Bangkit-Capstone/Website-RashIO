import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(uri);

  try {
    const database = client.db("skin-type-questionnaire");
    const collection = database.collection("result");

    const questions = await collection.find({}).toArray();

    res.status(200).json(questions[0]);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }
}
