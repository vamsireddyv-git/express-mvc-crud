import {student} from "../models/studentModel.js";

export const getStudent = async (req,res) => {
    const studentsData = await student.find();
    res.json(studentsData)
}

export const postStudents = async (req,res) => {
    const newData = await student.insertMany(req.body)
    res.json({
        message:"Data added successfully",
        newStudent : await student.find(),
    })
}

export const handleError = (err,req,res,next) => {
    console.log(err.message);
    res.send({
        message:err.message
    })
}

export const putStudents = async (req,res) => {
    const studentId = req.params.Id;
    const givenData = req.body;
    const updatedStudent = await student.findByIdAndUpdate(studentId,givenData,{new:true})
    res.status(200).json(updatedStudent);
}

export const deleteStudent = async (req,res) => {
    const sRollNo = Number(req.params.rollNo);
    try {
        const deletedStudent = await student.findOneAndDelete({rollNo : sRollNo})
           if(!deleteStudent){
             res.status(404).send({
                message: `No such student found with rol number ${sRollNo}`
            })
           }
            res.send("User deleted successfully")
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
