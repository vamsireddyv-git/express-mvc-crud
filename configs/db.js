import mongoose from "mongoose";

const connectDB = async () => {
    const MONGO_URI = "mongodb://localhost:27017/StudentDB"
    try{
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB Connected");
    }catch(err){
        console.log(err.message);
    }
}

export default connectDB;