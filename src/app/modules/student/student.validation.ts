import { z } from 'zod';

// Zod schema for UserName
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, 'First name cannot exceed 20 characters.')
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      {
        message: 'First name must be in capitalized format.',
      },
    ),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .refine((value) => /^[a-zA-Z]+$/.test(value), {
      message: 'Last name must contain only alphabetic characters.',
    }),
});

// Zod schema for Guardian
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required."),
  fatherOccupation: z.string().min(1, "Father's occupation is required."),
  fatherContactNo: z.string().min(1, "Father's contact number is required."),
  motherName: z.string().min(1, "Mother's name is required."),
  motherOccupation: z.string().min(1, "Mother's occupation is required."),
  motherContactNo: z.string().min(1, "Mother's contact number is required."),
});

// Zod schema for LocalGuardian
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required."),
  occupation: z.string().min(1, "Local guardian's occupation is required."),
  contactNo: z.string().min(1, "Local guardian's contact number is required."),
  address: z.string().min(1, "Local guardian's address is required."),
});

// Zod schema for Student
export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
