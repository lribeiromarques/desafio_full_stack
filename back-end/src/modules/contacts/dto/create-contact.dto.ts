import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateContactDto {
    @ApiProperty()
    @IsString()
    fullName: string
    @ApiProperty()
    @IsString()
    email: string
    @ApiProperty()
    @IsString()
    telephone: string

}
