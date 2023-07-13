import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email("Email is required"),
    password: z.string().min(6, "Password is required"),    
})

export type TLoginValues = z.infer<typeof loginSchema>;
