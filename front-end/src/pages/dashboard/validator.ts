import {z} from "zod"

export const schema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    telephone: z.string()
})

export type ClientData = z.infer<typeof schema>