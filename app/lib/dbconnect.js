import mongoose from "mongoose";

const connectdb=async ()=>{
    try {
        mongoose.connect(process.env.db_url); // Add a semicolon here
        console.log("Database connected");
        
    } catch (error) {
        console.error(error);
    }
}
export default connectdb;