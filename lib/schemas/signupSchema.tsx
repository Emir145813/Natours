import z from "zod";

export const signupSchema = z
  .object({
    name: z.string(),
    email: z.email(),
    password: z
      .string()
      .min(8, "Password  must be at least 8 characters")
      .max(16, "Password  must be at most 16 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password  must be at least 8 characters")
      .max(16, "Password  must be at most 16 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });