import { z } from "zod";

export const preorderSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters.")
    .max(80, "Full name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  purpose: z.enum(["student", "developer", "designer", "business"]),

  preferredModel: z.enum([
    "macbook-pro-m5",
    "macbook-pro-m5-pro",
    "macbook-pro-m5-max",
  ]),
});

export type PreorderFormValues = z.infer<typeof preorderSchema>;