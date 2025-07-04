import { z } from "zod";

export const checkoutSchema  = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    companyName: z.string().optional(),
    zipCode: z.string().min(1, "ZIP Code is required"),
    country: z.string().min(1, "Country/Region is required"),
    streetAddress: z.string().min(1, "Street address is required"),
    province: z.string().min(1, "Province is required"),
    town: z.string().min(1, "Town/City is required"),
    addon: z.string().optional(),
    email: z.string().email("Invalid email address"),
    adicionalInfo: z.string().optional(),
})

export type CheckoutFormData = z.infer<typeof checkoutSchema>;