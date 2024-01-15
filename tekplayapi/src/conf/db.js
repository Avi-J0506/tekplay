import mongoose from "mongoose";
import conf from "./conf.js";

const dburi = conf["database"];
export default async function connnectDB(){

    try {
        await mongoose.connect(dburi, {
          authSource: conf["env"] === "development"?"admin":null,
        });
        console.log('MongoDB connected');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
      }

    
}
