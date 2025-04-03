import mongoose from "mongoose"
import {DB_NAME} from "../constants.js";
// db is in other continent

export const connectDB = async () => {

    try{
       const connectioninstance = await mongoose.connect(`${process.env.
        MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected: ${connectioninstance.connection.host}`)
    } catch(error){
        console.log("ERROR:",error);
        process.exit()
    }

}