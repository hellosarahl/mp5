import {MongoClient} from "mongodb";
const u= process.env.MONGODB_URI;

const c= new MongoClient(u);

export async function D(){
    await c.connect();
    return c.db("shortener")
}