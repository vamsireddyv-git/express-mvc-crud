import express from 'express'
import studentRoutes from './routes/studentsRoutes.js';

import connectDB from './configs/db.js';
connectDB();

const app = express();
app.use(express.json())

const port = 8080;

app.use('/student',studentRoutes)

app.listen(port,()=>{
    console.log("Server is running");
})

