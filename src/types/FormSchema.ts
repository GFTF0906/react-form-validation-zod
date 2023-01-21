import { z } from 'zod';

export const FormSchema = z
  .object({
    firstName: z.string().min(1, 'First Name is required.'),
    lastName: z.string().min(1, 'Last Name is required.'),
    email: z
      .string()
      .min(1, 'Email is required.')
      .email('Need to be a valid email.'),
    password: z.string().min(1, 'Password is required.'),
    confirmPassword: z.string().min(1, 'Confirm Password is required.'),
  })
  .refine((data) => data.confirmPassword === data.password, {
    path: ['confirmPassword'],
    message: "Passwords don't match.",
  });

export type FormSchemaType = z.infer<typeof FormSchema>;
