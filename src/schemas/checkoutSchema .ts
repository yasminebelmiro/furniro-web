import { z } from "zod";

export const checkoutSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().optional(),
  zipCode: z
    .string()
    .min(8, "Zip must have 8 digits")
    .max(8, "CEP deve ter 8 dígitos")
    .regex(/^\d{8}$/, "Zip invalid, must be 8 digits"),
  country: z.string().min(1, "Country/Region is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  province: z.string().min(1, "Province is required"),
  town: z.string().min(1, "Town/City is required"),
  addon: z.string().optional(),
  email: z.string().email("Invalid email address"),
  adicionalInfo: z.string().optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
