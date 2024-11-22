import { Request, Response } from 'express';
import { StudentService } from './student.services';
import { z } from 'zod';
import studentValidationSchema from './student.validation';
// import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // data validation using Joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // creating a schema validation with Zod

    const zodparsedData = studentValidationSchema.parse(studentData);

    const result = await StudentService.createStudentIntoDB(zodparsedData);
    // console.log({ error }, { value });

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something Went to wrong',
    //     error: error.details,
    //   });
    // }

    res.status(200).json({
      success: true,
      message: 'Student is create successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something Went to wrong',
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students is retrieyed successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something Went to wrong',
      error: err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Students is retrieyed successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something Went to wrong',
      error: err,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Students is deleted successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something Went to wrong',
      error: err,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
