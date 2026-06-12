import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    rollNo: Number,
    name : String,
    age : Number,
    marks : Number
});

export const student = mongoose.model("student",studentSchema)
