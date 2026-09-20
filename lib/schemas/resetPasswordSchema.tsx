import z from "zod";

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "Password  must be at least 8 characters")
    .max(16, "Password  must be at most 16 characters"),
  confirmPassword: z
    .string()
    .min(8, "Password  must be at least 8 characters")
    .max(16, "Password  must be at most 16 characters"),
});