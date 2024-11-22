import express from 'express';
import { StudentControllers } from './student.control';

const router = express.Router();

// will call controller function
router.post('/create-student', StudentControllers.createStudent);

router.get('/:studentId', StudentControllers.getSingleStudent);

router.delete('/:studentId', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);
export const StudentRoute = router;
