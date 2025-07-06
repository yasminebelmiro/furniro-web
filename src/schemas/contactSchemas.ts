import z from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, "Your name is required"),
    email: z.string().min(1, "Email is required"),
    subject: z.string().optional(),
    message: z.string().optional()
})

export type ContactFormData = z.infer<typeof contactSchema>