"use client"
import { z } from "zod"

export const adminFormSchema = z.object({
    name: z.string().min(3, "Name is required and needs at least 3 characters"),
    price: z.string().min(1, "Price is required"),
    description: z.string().min(5, "A description is required"),
    image: z.union([
    z.string().includes("google",{message: "try a link from drive.google.com"}), 
    z.string().includes("catbox",{message: "try a link from catbox.moe"}),
    z.string().includes("cloudinary",{message: "try a link from cloudinary.com"})])
    .and(z.string().url("Image link must be an URL from Google, catbox or cloudinary!")),
})


export type TAdminFormValues = z.infer<typeof adminFormSchema>;
