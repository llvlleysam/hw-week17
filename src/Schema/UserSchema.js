import { z } from "zod";


export const userSchema = z.object({
            firstName: z.string(),
            lastName: z.string().min(1,"name is short"),
            phoneNumber: z.number().min(7),
            kinship: z.string(),
            email: z.string().email()
})