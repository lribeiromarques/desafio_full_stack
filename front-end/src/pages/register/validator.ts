import {z} from "zod"

export const schema = z.object({
    fullName : z.string(),
    email: z.string().email(),
    password: z.string(),
    telephone: z.string(),
    

})
export type RegisterData = z.infer<typeof schema>