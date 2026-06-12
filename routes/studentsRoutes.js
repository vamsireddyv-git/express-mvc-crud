import express from "express"
import { deleteStudent, getStudent, postStudents, putStudents } from "../controllers/studentController.js";

const router = express.Router();

router.get('/',getStudent);
router.post('/',postStudents)
router.put('/:Id',putStudents)
router.delete('/:rollNo',deleteStudent)

export default router;