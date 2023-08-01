import { Exclude } from "class-transformer"

export class User {
    readonly id: number
    fullName: string
    email: string

    @Exclude()
    password: string
    
    telephone: string
    createdAt : Date
}
