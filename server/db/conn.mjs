import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.MONGO_CONN_STRING;
console.log(connectionString);

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Successful Connection");
} catch(e) {
  console.error(e);
}

let db = conn.db("apds");

export default db;