/* eslint-disable prettier/prettier */
import { IsEmail, IsOptional, IsString } from "class-validator"

/* eslint-disable prettier/prettier */
export class EditUserDto {
    @IsEmail()
    @IsOptional()
     email?: string

    @IsString()
    @IsOptional()
    firstname?: string

    @IsString()
    @IsOptional()
    lastname?: string
}