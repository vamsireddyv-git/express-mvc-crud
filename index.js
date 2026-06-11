import express, { json } from 'express';

const app = express();
app.use(express.json())
const port = 3000;

app.listen(port,()=>{
    console.log("Server is running");
})

app.get('/',(req,res)=>{
    console.log(req.url)
    res.send('Home page')
})

app.get('/about',(req,res)=>{
    console.log(req.url)
    res.send('About page')
})

app.get('/contact',(req,res)=>{
    console.log(req.url)
    res.send('Contact page')
})

app.get('/user/:username',(req,res) => {
    const username = req.params.username;
    res.json({
        message:`Hello ${username} welcome`,
        lastName:'vamsi',
        age:21,
    })
})

let products = [{
        id:1,
        name:"Laptop",
    },{
        id:2,
        name:"Mobile",
    }]

app.get('/products',(req,res) => {
    res.json(products)
})

app.post('/products',(req,res) => {
    products.push({
        id:3,
        name:"Tabs",
    })
    console.log(products)
    res.send('Product added successfully')  
})

app.put("/products",(req,res) => {
    products[0].name = "Monitors";
    console.log(products);
    res.send("Updated Successfully")
})

app.delete("/products",(req,res) => {
    products.splice(0,1);
    console.log(products);
    console.log("Product deleted");
})


let students = [
    {
        rollNo : 4661,
        name : "Vamsi",
        age : 21,
        marks : 899,
    },
    {
        rollNo : 4662,
        name : "Praveen",
        age : 23,
        marks : 977,
    },
    {
        rollNo : 4664,
        name : "Karimulla",
        age : 21,
        marks : 700,
    },
    {
        rollNo : 4370,
        name : "Laxmi narayana",
        age : 22,
        marks : 750,
    }
];

app.get("/students",(req,res) => {
    res.json(students);
})

app.get("/students/:rollNo",(req,res) => {
    const rollNo = Number(req.params.rollNo);
    const studentData = students.filter((student)=>{
        return student.rollNo === rollNo
    })
    if(studentData.length !== 0){
        res.json(studentData)
    }else{
        res.send("No such student found")
    }
})

app.get("/students",(req,res)=>{
    const {age , marks} = req.query;
    const studentsArray = students.filter((student)=>{
        return student.age === Number(age) && student.marks === Number(marks)
    })
    res.json(studentsArray)
    console.log(req.query);
})

app.post("/students",(req,res) =>{
    const newStudent = req.body;
    students.push(newStudent)
    res.status(201).json({
        message:"Student data updated successfully",
        student: newStudent,
    })
})

app.put("/students",(req,res) => {
    students[1].age > 18 ? students[1].name = "barbell" : students[1].name = "praveen";
    
})

app.delete("/students",(req,res) => {
    students[1].name.startsWith("Pra") && students.splice(1,2);
    console.log(students);
    res.send("student data successfully");
})

