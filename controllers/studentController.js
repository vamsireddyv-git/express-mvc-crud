let students = [
    { rollNo : 4661, name : "Vamsi", age : 21,marks : 899,},
    { rollNo : 4662, name : "Praveen", age : 23, marks : 977 },
    { rollNo : 4664, name : "Karimulla", age : 21, marks : 700, },
    { rollNo : 4417, name : "Abhilash", age : 21, marks : 767, },
    { rollNo : 4370, name : "Laxmi narayana", age : 22, marks : 750,}
];

export const getStudent = (req,res) => {
    res.json(students)
}

export const postStudents = (req,res) => {
    const newData = req.body;
    students.push(newData);
    res.json({
        message:"Data added successfully",
        newStudent : newData,
    })
}

export const handleError = (err,req,res,next) => {
    console.log(err.message);
    res.send({
        message:err.message
    })
}

export const putStudents = (req,res) => {
    const {rollNo} = req.params;
    const actualStudent = students.find((student) => {
        return student.rollNo === Number(rollNo)
    })
    if(actualStudent){
        actualStudent.name = "Rahul";
        res.send(students);
    }else{
            throw new Error(`No student found with rollno ${rollNo}`)
        }
}

export const deleteStudent = (req,res) => {
    const {rollNo,age} = req.query;
    const actualStudent = students.find((student) => {
        return student.rollNo === Number(rollNo) && student.age === Number(age);
    })
    if(actualStudent){
        const index =   students.indexOf(actualStudent);
        students.splice(index,1);
        res.send(students);
    }else{
            throw new Error(`No student found with rollno ${rollNo} and age ${age}`)
        }
}
